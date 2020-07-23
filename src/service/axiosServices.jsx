import axios from 'axios'

export default class AxiosService{
    Post(url,data,isHeaderRequired){
        return axios.post(url,data,isHeaderRequired);
    }

    Get(url,data,isHeaderRequired){
        return axios.get(url,data,isHeaderRequired);
    }
    
    Delete(url,isHeaderRequired){
        return axios.delete(url,isHeaderRequired);
    }
    Put(url,data,isHeaderRequired){
        return axios.put(url,data,isHeaderRequired);
    }
}