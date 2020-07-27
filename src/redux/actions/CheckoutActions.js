import CartService from "./../../service/cartService";
const cartService = new CartService();

export const GetCart = "GET_Cart";

export const getCheckout = () => {
return (dispatch) => {
       cartService.GetCart(localStorage.getItem("Token")).then((json) => {
        dispatch({
          type: GetCart,
          payload: { cartItems: [...json.data.data].map((item) => ({
          ...item,
          count: 1,
        })), },
        });
      })
  };
};
