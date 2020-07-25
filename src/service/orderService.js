import Configuration from "../Configuration/configuration";
import AxiosService from "./axiosServices";

const axiosService = new AxiosService();
const apiUrl = Configuration.url;

class OrderService {
  PlaceOrder(cartId, address, city, pincode, token) {
    return axiosService.Post(`${apiUrl}Order/OrderPlace`, {}, true, {
      params: {
        CartId: cartId,
        Address: `${address}`,
        City: `${city}`,
        PinCode: pincode
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

 
}
export default OrderService;
