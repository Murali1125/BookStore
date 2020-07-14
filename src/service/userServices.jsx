import Configuration from "../Configuration/configuration";
import AxiosService from './axiosServices'

const axiosService = new AxiosService();
const apiUrl = Configuration.url;

class Service {
  
  Registration(data) {
    console.log("get axios services",data);
    return axiosService.Post(`${apiUrl}User/Registration`, data,false);
  }
}
export default Service;