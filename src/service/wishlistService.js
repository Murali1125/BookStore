import Configuration from "../Configuration/configuration";
import AxiosService from "./axiosServices";

const axiosService = new AxiosService();
const apiUrl = Configuration.url;

class WishlistService {
  AddToWishlist(bookId, token) {
    return axiosService.Post(`${apiUrl}WishList/${bookId}/1`, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  GetWishlist(token) {
    return axiosService.Get(`${apiUrl}WishList`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  RemoveFromWishlist(wishlistId, token) {
    return axiosService.Delete(`${apiUrl}WishList/${wishlistId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
export default WishlistService;
