import { GetWishlist } from "../actions/WishlistActions";
// Reducers file of Wishlist

const initialState = {
    wishlist : []
}

let responseData = [];
export const wishlistReducer = (state = initialState, action) => {
  console.log("actions in reducer", action);
  console.log("state in reducer", state);
  switch (action.type) {
    case GetWishlist:
      return action.payload;
    default:
      return state;
  }
};