import Configuration from './../Configuration/configuration'
import AxiosService from './axiosServices'

const url = Configuration.url;
const axiosService = new AxiosService();
const Token = localStorage.getItem("Token")
const header = { headers:{
                            "Authorization" : `Bearer ${Token}`}}
export function AddBook(data){
    return axiosService.Post(url+"Book",data,header)
}
export function GetAllBooks(){
    return axiosService.Get(url+"Book",null,header)
}
export function DeleteBook(bookId){
    console.log("delete book",bookId);
    return axiosService.Delete(url+"Book/"+bookId,header)
}