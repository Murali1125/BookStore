import { GetWishlist } from "../actions/WishlistActions";
// Reducers file of Wishlist

const initialState = {
  wishlist: [],
};

export const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case GetWishlist:
      return action.payload;
    default:
      return state;
  }
};
