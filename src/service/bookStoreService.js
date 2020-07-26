import Configuration from "../Configuration/configuration";
import AxiosService from "./axiosServices";

const axiosService = new AxiosService();
const apiUrl = Configuration.url;

class BookStoreService {
  GetAllBooks(data) {
    return axiosService.Get(`${apiUrl}Book`, null, false);
  }

  GetAllBooksByKeyword(data) {
    return axiosService.Get(`${apiUrl}Book/${data}`, null, false);
  }

  SortBooks(parameter, order) {
    return axiosService.Get(`${apiUrl}Book/Sorting`,  {
      params: {
        columnName: `${parameter}`,
        order: `${order}`,
      }
    });
  }

  
}
export default BookStoreService;
