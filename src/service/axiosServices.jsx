import axios from 'axios'

export default class AxiosService{
    Post(url,data,header){
        return axios.post(url,data,header);
    }

    Get(url,data,header){
        return axios.get(url,data,header);
    }
    
    Delete(url,header){
        return axios.delete(url,header);
    }
    Put(url,data,header){
        return axios.put(url,data,header);
    }
}