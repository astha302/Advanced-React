import React from "react";
import { Mutation, Query } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";
import User, { LOGGED_USER } from "./User";
import { TEMP_DATA } from "./Cart";
import { Button } from "./../lib/exim-component";

const ADDCART = styled.button`
  background: white;
  border: 1px solid;
  /* font-size: 1rem; */
  padding: 1rem;
  width: 50%;
`;

const ADD_TO_CART = gql`
  mutation ADD_TO_CART($id: ID!) {
    addToCart(id: $id) {
      id
      quantity
    }
  }
`;

const ADD_TO_TEMP_CART = gql`
  mutation ADD_TO_TEMP_CART(
    $id: ID!
    $token: String!
    $color: String
    $size: String
  ) {
    addToTempCart(id: $id, token: $token, color: $color, size: $size) {
      id
      quantity
      color
      size
    }
  }
`;

class AddCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tokenId: ""
    };
  }

  addToTempCart = async (e, addToTempCart) => {
    e.preventDefault();
    if (
      this.props.color === "" ||
      this.props.size === "" ||
      this.props.color === "none" ||
      this.props.size === "none"
    ) {
      alert("Please Select Color and Size both");
    } else {
      await addToTempCart({
        variables: {
          id: this.props.id,
          token: localStorage.getItem("randomId").toString(),
          color: this.props.color,
          size: this.props.size
        }
      }).catch(err => {
        console.log(err.message);
      });
    }
  };

  componentDidMount() {
    if (localStorage.getItem("randomId")) {
      this.setState({
        tokenId: localStorage.getItem("randomId").toString()
      });
    }
  }
  render() {
    const { id, disabled } = this.props;

    return (
      <User>
        {({ data: { me } }) => {
          if (me)
            return (
              <Mutation
                mutation={ADD_TO_CART}
                variables={{
                  id
                }}
                refetchQueries={[{ query: LOGGED_USER }]}
              >
                {(addToCart, { loading }) => (
                  <Button disabled={loading || disabled} onClick={addToCart}>
                    Add{loading && "ing"} To Cart
                  </Button>
                )}
              </Mutation>
            );
          else {
            return (
              <Mutation
                mutation={ADD_TO_TEMP_CART}
                refetchQueries={[
                  {
                    query: TEMP_DATA,
                    variables: {
                      token: this.state.tokenId ? this.state.tokenId : "123"
                    }
                  }
                ]}
              >
                {(addToTempCart, { loading }) => (
                  <Button
                    disabled={loading || disabled}
                    onClick={e => this.addToTempCart(e, addToTempCart)}
                  >
                    Add{loading && "ing"} To Cart
                  </Button>
                )}
              </Mutation>
            );
          }
        }}
      </User>
    );
  }
}

export default AddCart;
export { ADD_TO_CART, ADDCART, ADD_TO_TEMP_CART };
