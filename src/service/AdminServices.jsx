import Configuration from "./../Configuration/configuration";
import AxiosService from "./adminbookservces";

const url = Configuration.url;
const axiosService = new AxiosService();
const Token = localStorage.getItem("Token");
const header = {
  headers: {
    Authorization: `Bearer ${Token}`,
  },
};
// CURD operational Functions for admin
export function AddBook(data) {
  return axiosService.Post(url + "Book", data, header);
}
export function GetAllBooks() {
  return axiosService.Get(url + "Book", null,header);
}
export function UpdateBook(data, id) {
  return axiosService.Put(url + "Book/" + id, data,header);
}
export function DeleteBook(bookId) {
  return axiosService.Delete(url + "Book/" + bookId, header);
}
export function SearchList(searchWord) {
  return axiosService.Get(url + "Book/" + searchWord, null,header);
}
export function ImageBook(bookId, data) {
  return axiosService.Put(
    url + "Book/InsertImage/" + bookId,
    data,
    header
  );
}
