import { getStoreBooks, GetAllBooks,SearchBooks,LowToHigh,HighToLow } from "../actions/StoreActions";
// Reducers file of Admin  Dashbord

const initialState = {
    books : []
}

let responseData = [];
export const storeReducer = (state = initialState, action) => {  
  switch (action.type) {
    case GetAllBooks:
      return action.payload;

    case SearchBooks:

      return action.payload;

    case LowToHigh:
      return action.payload;

    case HighToLow:
      return action.payload;

    default:
      return state;
  }
};
