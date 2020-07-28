import axios from "axios";

export default class AxiosService {  
  Post(url, data,isheadderRequired=false,  header) {
    return axios.post(url, data,  isheadderRequired && header);
  }
  Get(url, data, isHeaderRequired, header) {
    return axios.get(url, data, isHeaderRequired && header);
  }
  Delete(url, isHeaderRequired, header) {
    return axios.delete(url, isHeaderRequired && header);
  }
  Put(url, data, isHeaderRequired, header) {
    return axios.put(url, data, isHeaderRequired && header);
  }
}
