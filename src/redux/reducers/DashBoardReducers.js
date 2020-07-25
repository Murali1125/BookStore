import {getBooks,Getdata} from "./../actions/DashBoardActions"
import {GetAllBooks} from './../../service/AdminServices'
// Reducers file of Admin  Dashbord 

const initialState = {
    bookData : [],
    number : 2
}
let tempData;
 export const BookdataReducer = async (state=initialState,action)=>{
     console.log("actions in reducer", action)
     console.log("state in reducer", state)
    switch(action.type){
        case Getdata:
            await GetAllBooks()
            .then(responce=>{
                tempData= responce.data.data   
            })
            .catch(error=>{
                console.log(error.message, " error in catch")
                
            })
            return {
                ...state,
                bookData :  tempData               
            }
        default:
            return state    
    }
}