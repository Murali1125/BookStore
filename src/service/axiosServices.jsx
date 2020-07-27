import axios from "axios";

export default class AxiosService {
  // Post(url, data,headderRequired=false, header) {
  //   return axios.post(url, data,header);
  // }

  // Get(url, data, headderRequired=false,header) {
  //   return axios.get(url, data,header);
  // }

  // Delete(url,headderRequired=false, header) {
  //   return axios.delete(url,header);
  // }
  // Put(url, data,headderRequired=false,header) {
  //   return axios.put( url, 
  //                     data, 
  //                     (headderRequired)
  //                     header);
  // }
  Post(url, data, isHeaderRequired, header) {
    return axios.post(url, data, isHeaderRequired && header);
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
