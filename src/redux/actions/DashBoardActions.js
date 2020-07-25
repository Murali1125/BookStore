// Actions file for  Admin DashBoards

export const Getdata = "GetBooksData";

export const getBooks = ()=>{
    return {
        type : Getdata,
    }
}