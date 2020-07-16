import Configuration from "../Configuration/configuration";
import AxiosService from "./axiosServices";

const axiosService = new AxiosService();
const apiUrl = Configuration.url;

class BookStoreService {
  GetAllBooks(data) {
    console.log("get axios services", data);
    return axiosService.Get(`${apiUrl}Book`, null, false);
  }

}
export default BookStoreService;
