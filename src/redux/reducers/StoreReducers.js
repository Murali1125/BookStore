import { getStoreBooks, GetAllBooks,SearchBooks,LowToHigh,HighToLow, ToCart, GetCartLength } from "../actions/StoreActions";
// Reducers file of Admin  Dashbord

const initialState = {
    books : []
}

let responseData = [];
export const storeReducer = (state = initialState, action) => {
  console.log("actions in reducer", action);
  console.log("state in reducer", state);
  switch (action.type) {
    case GetAllBooks:
      return action.payload;

    case SearchBooks:
      return action.payload;

    case LowToHigh:
      return action.payload;

    case HighToLow:
      return action.payload;

    case GetCartLength:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
};
