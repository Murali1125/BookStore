import Configuration from './../Configuration/configuration'
import AxiosService from './axiosServices'

const url = Configuration.url;
const axiosService = new AxiosService();
const Token = localStorage.getItem("Token")

export function AddBook(data){
    console.log("bookData", data ,'\n', "token",Token)
    return axiosService.Post(url+"Book",data,{ headers:{
                                                    "Authorization" : `Bearer ${Token}`}})
}