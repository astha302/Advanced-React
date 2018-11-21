import React, { Component } from 'react';
import {Mutation} from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import Error from './ErrorMessage';
import PropTypes from 'prop-types';
import { LOGGED_USER } from './User';


const RESET_PASSWORD = gql`
  mutation RESET_PASSWORD($resetToken: String!,$password: String!, $confirmPassword: String!) {
    resetPassword(resetToken: $resetToken,password: $password, confirmPassword: $confirmPassword) {
      id
      email
      name
    }
  }
`;


class ResetPassword extends Component {
    static propTypes={
        resetToken: PropTypes.string.isRequired,
    };

    state = {
        password: '',
        confirmPassword: '',
      };
      saveToState = e => {
        this.setState({ [e.target.name]: e.target.value });
      };
      
    render() {
        return (
            <Mutation mutation={RESET_PASSWORD} variables={{ 
                resetToken: this.props.resetToken,
                password: this.state.password,
                confirmPassword: this.state.confirmPassword
             }} refetchQueries={[{
                 query: LOGGED_USER
             }]} >
                {
                    (resetPassword,{error,loading,called}) => {

                    return(
            <Form method='post' onSubmit={
                async (e) => {
                    e.preventDefault();
                    await resetPassword();
                    this.setState({ password: '', confirmPassword: ''});
                }
            }>
                <Error error={error} />
                
                <fieldset disabled={loading} aria-busy={loading}>
                    <h2>Change Password</h2>
                        <label htmlFor="password">
                        Password
                        <input
                        type="password"
                        name="password"
                        placeholder="password"
                        value={this.state.password}
                        onChange={this.saveToState}
                        />
                    </label>

                   <label htmlFor="confirmPassword">
                        Confirm Password
                        <input
                        type="password"
                        name="confirmPassword"
                        placeholder="confirmPassword"
                        value={this.state.confirm}
                        onChange={this.saveToState}
                        />
                        </label>

                    <button type="submit">Reset</button>

                </fieldset>
            </Form>
                    )
            }
        }
    </Mutation>
        );
    }
}

export default ResetPassword;