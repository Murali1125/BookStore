import Configuration from './../Configuration/configuration'
import AxiosService from './axiosServices'

const url = Configuration.url;
const axiosService = new AxiosService();
const Token = localStorage.getItem("Token")
const header = { headers:{
                            "Authorization" : `Bearer ${Token}`}}
console.log("token",header);

const Header ={
    headers:{
                "Authorization" : `Bearer ${Token}`,
                'Content-Type': 'multipart/form-data'
            }
}
console.log("Header",Header);
// CURD operational Functions for admin                            
export function AddBook(data){
    return axiosService.Post(url+"Book",data,true,header);
}
export function GetAllBooks(){
    return axiosService.Get(url+"Book",null,header);
}
export  function UpdateBook(data,id){
    return   axiosService.Put(url+"Book/"+id,data, true,header);
};
export function DeleteBook(bookId){
    return axiosService.Delete(url+"Book/"+bookId,true,header);
}
export function SearchList(searchWord){
    console.log("search word in adminservice", searchWord)
    return axiosService.Get(url+"Book/"+searchWord,null,header);
}
export function ImageBook(bookId, data) {
  console.log("Image API", bookId, data);
  return axiosService.Put(
    url+"Book/InsertImage/"+bookId,
    data,
    true,
    Header
  );
}