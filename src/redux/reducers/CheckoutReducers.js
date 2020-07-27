import { GetCart } from "../actions/CheckoutActions";
// Reducers file of Wishlist

const initialState = {
    cartItems : []
}

let responseData = [];
export const checkoutReducer = (state = initialState, action) => {
  console.log("actions in reducer", action);
  console.log("state in reducer", state);
  switch (action.type) {
    case GetCart:
      return action.payload;
    default:
      return state;
  }
};