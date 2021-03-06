import { Query, Mutation } from 'react-apollo';
import Error from './ErrorMessage';
import gql from 'graphql-tag';
import TableStyle from './styles/Table';
import SickButton from './styles/SickButton';
import PropTypes from 'prop-types';
import { Button, CheckBox, Table, Label,Icon } from '../lib/exim-component';

const possiblePermissions = [
  'ADMIN',
  'USER',
  'ITEMCREATE',
  'ITEMUPDATE',
  'ITEMDELETE',
  'PERMISSIONUPDATE',
];

const UPDATE_PERMISSIONS_MUTATION = gql`
  mutation updatePermissions($permissions: [Permission], $userId: ID!) {
    updatePermissions(permissions: $permissions, userId: $userId) {
      id
      permissions
      name
      email
    }
  }
`;

const ALL_USERS_QUERY = gql`
  query {
    users {
      id
      name
      email
      permissions
    }
  }
`;

const Permissions = props => (
  <Query query={ALL_USERS_QUERY}>
    {({ data, loading, error }) => (
      <div>
        <Error error={error} />
        <div>
        
          <Table>
            <thead>
              <tr>
                <th className='per-tbl'>Name</th>
                <th className='per-tbl'>Email</th>
                {possiblePermissions.map(permission => <th className='per-tbl' key={permission}>{permission}</th>)}
                <th className='per-tbl'>Update</th>
              </tr>
            </thead>
            <tbody>{data.users.map(user => <UserPermissions user={user} key={user.id} />)}</tbody>
          </Table>
        </div>
      </div>
    )}
  </Query>
);

class UserPermissions extends React.Component {
  static propTypes = {
    user: PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
      id: PropTypes.string,
      permissions: PropTypes.array,
    }).isRequired,
  };
  state = {
    permissions: this.props.user.permissions,
  };
  handlePermissionChange = (e) => {
    const checkbox = e.target;
    console.log(e.target.checked)
    // take a copy of the current permissions
    let updatedPermissions = [...this.state.permissions];
    // figure out if we need to remove or add this permission
    if (checkbox.checked) {
      // add it in!
      updatedPermissions.push(checkbox.name);
    } else {
      updatedPermissions = updatedPermissions.filter(permission => permission !== checkbox.name);
    }
    this.setState({ permissions: updatedPermissions });
  };
  render() {
    const user = this.props.user;
    return (
      <Mutation
        mutation={UPDATE_PERMISSIONS_MUTATION}
        variables={{
          permissions: this.state.permissions,
          userId: this.props.user.id,
        }}
      >
        {(updatePermissions, { loading, error }) => (
          <>
            {error && <tr><td colspan="8"><Error error={error} /></td></tr>}
            < tr >
              <td>{user.name}</td>
              <td>{user.email}</td>
              {possiblePermissions.map(permission => (
                <td key={permission}>
          
                  <label htmlFor={`${user.id}-permission-${permission}`}>
                  <CheckBox
                  name={permission}
                  checked={this.state.permissions.includes(permission)} onClick={(e) => this.handlePermissionChange(e)}></CheckBox>
                    {/* <input
                      id={`${user.id}-permission-${permission}`}
                      type="checkbox"
                      checked={this.state.permissions.includes(permission)}
                      value={permission}
                      onChange={this.handlePermissionChange}
                    /> */}
                  </label>
                </td>
              ))}
              <td>
                <Button disabled={loading} onClick={updatePermissions} size="medium" className="update-btn">
                <Icon for={"upload"} />Updat{loading ? 'ing' : 'e'}
                </Button>
                {/* <SickButton type="button" disabled={loading} onClick={updatePermissions}>
                 
                </SickButton> */}
              </td>
            </tr>
          </>
        )
        }
      </Mutation>
    );
  }
}

export default Permissions;
