import Configuration from "../Configuration/configuration";
import AxiosService from "./axiosServices";

const axiosService = new AxiosService();
const apiUrl = Configuration.url;

class CartService {
  AddToCart(bookId, token) {
    return axiosService.Post(`${apiUrl}Cart/${bookId}/1`, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  GetCart(token) {
    return axiosService.Get(`${apiUrl}Cart`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  RemoveFromCart(cartId, token){
      return axiosService.Delete(`${apiUrl}Cart/${cartId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  }
}
export default CartService;
