import Configuration from "../Configuration/configuration";
import AxiosService from './axiosServices'

const axiosService = new AxiosService();
const apiUrl = Configuration.url;

class Service {
  Registration(data) {
    return axiosService.Post(`${apiUrl}User/Registration`, data,false,false);
  }
  Login(data) {
    return axiosService.Post(`${apiUrl}User/Login`, data,false,false);
  }
}
export default Service;