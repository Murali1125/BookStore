import { Getdata } from "./../actions/DashBoardActions";
import { GetAllBooks } from "./../../service/AdminServices";
// Reducers file of Admin  Dashbord

const initialState = {
  bookData: [],
};

let tempData;
export const BookdataReducer = async (state = initialState, action) => {
  switch (action.type) {
    case Getdata:
      await GetAllBooks()
        .then((responce) => {
          tempData = responce.data.data;
        })
        .catch((error) => {});
      return {
        ...state,
        bookData: tempData,
      };
    default:
      return state;
  }
};
