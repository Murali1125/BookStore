import Configuration from "../Configuration/configuration";
import AxiosService from "./axiosServices";

const axiosService = new AxiosService();
const apiUrl = Configuration.url;

class CartService {
  AddToCart(bookId, token) {
    return axiosService.Post(`${apiUrl}Cart`, {}, true, {
      params: {
        BookId: bookId,
        Quantity: 1,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  AddToCartFromWishlist(wishlistId, token) {
    return axiosService.Post(
      `${apiUrl}Cart/WishListToCart/${wishlistId}`,
      {},
      true,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }

  GetCart(token) {
    return axiosService.Get(`${apiUrl}Cart`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  RemoveFromCart(cartId, token) {
    return axiosService.Delete(`${apiUrl}Cart/${cartId}`,true, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
export default CartService;
