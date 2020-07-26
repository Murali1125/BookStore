import React, { Component } from "react";
import Header from "./../../component/header/Header";
import { Grid, Container, TextField } from "@material-ui/core";
import Footer from "../../component/Footer/Footer";
import bookCover from "./../../assets/bookCover.jpg";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import "./Checkout.scss";
import CartService from "./../../service/cartService";
import OrderService from "./../../service/orderService";

const cartService = new CartService();
const orderService = new OrderService();
export default class Checkout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      placeOrderButton: "myCart-submit--button",
      continueButton: "customerDetails-continue--button",
      editDescription: "edit",
      descriptionClass: "customerDetails showPreview",
      checkoutClass: "checkout showPreview",
      disable: false,
      validationMessage: "",

      name: localStorage.getItem("FirstName")
        ? `${localStorage.getItem("FirstName")} ${localStorage.getItem(
            "LastName"
          )}`
        : "",
      phone: localStorage.getItem("Phone Number")
        ? localStorage.getItem("Phone Number")
        : "",
      address: localStorage.getItem("Address")
        ? localStorage.getItem("Address")
        : "",
      city: localStorage.getItem("City") ? localStorage.getItem("City") : "",
      pincode: localStorage.getItem("Pin Code")
        ? localStorage.getItem("Pin Code")
        : "",
      locality: localStorage.getItem("locality")
        ? localStorage.getItem("locality")
        : "",
      landmark: localStorage.getItem("landmark")
        ? localStorage.getItem("landmark")
        : "",

      cartItems: [],
    };
  }

  getCart = () => {
    cartService.GetCart(localStorage.getItem("Token")).then((json) => {
      console.log(json);
      this.setState({
        cartItems: [...json.data.data].map((item) => ({
          ...item,
          count: 1,
        })),
      });
    });
  };

  removeFromCart = (cartId) => {
    cartService
      .RemoveFromCart(cartId, localStorage.getItem("Token"))
      .then((json) => {
        console.log(json);
        this.getCart();
      });
  };
  placeOrder = () => {
    this.setState({
      descriptionClass: "customerDetails",
      placeOrderButton: "myCart-submit--button-hidden",
    });
  };
  editDescription = () => {
    this.setState({
      disable: false,
      editDescription: "edit",
      continueButton: "customerDetails-continue--button",
      checkoutClass: "checkout showPreview",
    });
  };
  continue = () => {
    if (
      this.state.name === "" ||
      this.state.address === "" ||
      this.state.city === "" ||
      this.state.landmark === "" ||
      this.state.locality === "" ||
      this.state.phone === "" ||
      this.state.pincode === ""
    ) {
      this.setState({
        validationMessage: "Please fill all the details*",
      });
    } else {
      this.setState({
        checkoutClass: "checkout",
        continueButton: "customerDetails-continue--button-hidden",
        editDescription: "edit-show",
        disable: true,
        validationMessage: "",
      });
    }

    console.log(this.state.name);
  };
  onLogoutClick = () => {
    localStorage.removeItem("Token");
    localStorage.removeItem("FirstName");
    localStorage.removeItem("LastName");
    localStorage.removeItem("Email");
    localStorage.removeItem("User Role");
    localStorage.removeItem("Address");
    localStorage.removeItem("City");
    localStorage.removeItem("Phone Number");
    this.props.history.push("/login");
  };

  increment = (index) => {
    this.setState({
      cartItems: [
        ...this.state.cartItems,
        this.state.cartItems[index].count + 1,
      ],
    });
  };
  onProfileClick = () => {
    if (localStorage.getItem("Token")) {
      this.props.history.push("/profile");
    } else {
      this.props.history.push("/login");
    }
  };
  goToStore = () => {
    this.props.history.push("/");
  };
  goToCart = () => {
    this.props.history.push("/checkout");
  };

  purchaseOrder = () => {
    this.state.cartItems
      .filter((item) => item.isUsed === false)
      .filter((item) => item.isDeleted === false)
      .map((item, index) => {
        const cartId = item.cartId;
        const address = `${this.state.name} ${this.state.address} ${this.state.locality} ${this.state.landmark} ${this.state.phone}`;
        const city = this.state.city;
        const pincode = this.state.pincode;

        orderService
          .PlaceOrder(
            cartId,
            address,
            city,
            pincode,
            localStorage.getItem("Token")
          )
          .then((json) => {
            this.getCart();
          });
      });
      
  };

  componentDidMount() {
    this.getCart();
  }

  render() {
    return (
      <React.Fragment>
        <Grid container direction="column">
          <Header
            variant="rich"
            goToStore={() => this.goToStore()}
            onProfileClick={() => this.onProfileClick()}
            onLogout={() => this.onLogoutClick()}
            goToCart={() => this.goToCart()}
          ></Header>
          <Container maxWidth="lg" className="checkoutContainer">
            {/*  my cart ***************************************************************************** */}
            <Grid container direction="column" className="myCart">
              <Grid container item className="myCart-header">
                My cart (
                {
                  this.state.cartItems
                    .filter((item) => item.isUsed === false)
                    .filter((item) => item.isDeleted === false).length
                }
                )
              </Grid>
              {this.state.cartItems
                .filter((item) => item.isUsed === false)
                .filter((item) => item.isDeleted === false)
                .map((item, index) => {
                  console.log("ITem", item);
                  return (
                    <Grid
                      container
                      direction="row"
                      xs={12}
                      alignItems="flex-start"
                      justify="flex-start"
                      className="myCart-itemDescription"
                    >
                      <Grid
                        direction="column"
                        className="myCart-itemDescription--image"
                        alignItems="center"
                        justify="center"
                        xs={12}
                        sm={1}
                      >
                        <img
                          src={`${item.bookImage}`}
                          height="100px"
                          width="70px"
                          alt="bookCover"
                        />
                      </Grid>
                      <Grid item direction="column">
                        <Grid className="myCart-itemDescription--title">
                          {item.title}
                        </Grid>
                        <Grid
                          container
                          className="myCart-itemDescription--author"
                        >
                          by {item.author}
                        </Grid>
                        <Grid className="myCart-itemDescription--price">
                          Rs. {item.price}
                        </Grid>
                        <Grid
                          container
                          direction="row"
                          className="myCart-itemDescription--count"
                        >
                          <div
                            className="myCart-itemDescription--count-minus"
                            onClick={() => this.decrement(index)}
                          >
                            &mdash;
                          </div>
                          <input
                            type="number"
                            defaultValue={item.count}
                            max={1000}
                            min={1}
                            className="myCart-itemDescription--count-value"
                          ></input>
                          <div
                            className="myCart-itemDescription--count-plus"
                            onClick={() => this.increment(index)}
                          >
                            &#43;
                          </div>
                          <Grid
                            onClick={() => this.removeFromCart(item.cartId)}
                          >
                            Remove
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  );
                })}
              <Grid
                container
                item
                direction="row"
                alignItems="center"
                justify="flex-end"
                className="myCart-submit"
              >
                <button
                  className={this.state.placeOrderButton}
                  onClick={this.placeOrder}
                >
                  PLACE ORDER
                </button>
              </Grid>
            </Grid>

            {/* details ****************************************************************** */}
            <Grid
              container
              direction="row"
              justify="space-between"
              className={this.state.descriptionClass}
            >
              <Grid container item className="customerDetails-header" xs={11}>
                Customer Details
              </Grid>
              <Grid
                container
                item
                xs={1}
                className={this.state.editDescription}
                onClick={this.editDescription}
              >
                <EditOutlinedIcon />
              </Grid>
              <Grid
                container
                item
                className="customerDetails-detailForm"
                md={10}
                xs={12}
                spacing={2}
              >
                <Grid container item direction="row" xs={12} spacing={2}>
                  <Grid item md={5} xs={12}>
                    <TextField
                      id="name"
                      size="small"
                      className="pt-small"
                      label="Name"
                      defaultValue={this.state.name}
                      disabled={this.state.disable}
                      onChange={(event) =>
                        this.setState({
                          name: event.target.value,
                        })
                      }
                      variant="outlined"
                      fullWidth
                      required
                    ></TextField>
                  </Grid>
                  <Grid item md={5} xs={12}>
                    <TextField
                      id="phone"
                      size="small"
                      className="pt-small"
                      label="Phone number"
                      defaultValue={this.state.phone}
                      disabled={this.state.disable}
                      onChange={(event) =>
                        this.setState({
                          phone: event.target.value,
                        })
                      }
                      variant="outlined"
                      fullWidth
                      required
                    ></TextField>
                  </Grid>
                </Grid>
                <Grid container item direction="row" xs={12} spacing={2}>
                  <Grid item md={5} xs={12}>
                    <TextField
                      id="pincode"
                      size="small"
                      className="pt-small"
                      label="Pincode"
                      defaultValue={this.state.pincode}
                      disabled={this.state.disable}
                      onChange={(event) =>
                        this.setState({
                          pincode: event.target.value,
                        })
                      }
                      variant="outlined"
                      fullWidth
                      required
                    ></TextField>
                  </Grid>
                  <Grid item md={5} xs={12}>
                    <TextField
                      id="locality"
                      size="small"
                      className="pt-small"
                      label="Locality"
                      defaultValue={this.state.locality}
                      disabled={this.state.disable}
                      onChange={(event) =>
                        this.setState({
                          locality: event.target.value,
                        })
                      }
                      variant="outlined"
                      fullWidth
                      required
                    ></TextField>
                  </Grid>
                </Grid>
                <Grid container item direction="row" xs={12} spacing={2}>
                  <Grid item md={10} xs={12}>
                    <TextField
                      id="address"
                      size="small"
                      className="pt-small"
                      label="Address"
                      defaultValue={this.state.address}
                      disabled={this.state.disable}
                      onChange={(event) =>
                        this.setState({
                          address: event.target.value,
                        })
                      }
                      variant="outlined"
                      multiline
                      fullWidth
                      required
                    ></TextField>
                  </Grid>
                </Grid>
                <Grid container item direction="row" xs={12} spacing={2}>
                  <Grid item md={5} xs={12}>
                    <TextField
                      id="city"
                      size="small"
                      className="pt-small"
                      label="City/town"
                      defaultValue={this.state.city}
                      disabled={this.state.disable}
                      onChange={(event) =>
                        this.setState({
                          city: event.target.value,
                        })
                      }
                      variant="outlined"
                      fullWidth
                      required
                    ></TextField>
                  </Grid>
                  <Grid item md={5} xs={12}>
                    <TextField
                      id="landmark"
                      size="small"
                      className="pt-small"
                      label="Landmark"
                      defaultValue={this.state.landmark}
                      disabled={this.state.disable}
                      onChange={(event) =>
                        this.setState({
                          landmark: event.target.value,
                        })
                      }
                      variant="outlined"
                      fullWidth
                      required
                    ></TextField>
                  </Grid>
                </Grid>
                <Grid
                  container
                  item
                  direction="row"
                  xs={12}
                  spacing={0}
                  className="customerDetails-validation"
                >
                  {this.state.validationMessage}
                </Grid>
              </Grid>
              <Grid
                container
                item
                direction="row"
                alignItems="center"
                justify="flex-end"
                className="customerDetails-continue"
              >
                <button
                  id="continue"
                  className={this.state.continueButton}
                  onClick={this.continue}
                >
                  CONTINUE
                </button>
              </Grid>
            </Grid>

            {/* checkout ************************************************************** */}
            <Grid
              container
              direction="column"
              className={this.state.checkoutClass}
            >
              <Grid container item className="checkout-header">
                Order Summary (
                {
                  this.state.cartItems
                    .filter((item) => item.isUsed === false)
                    .filter((item) => item.isDeleted === false).length
                }
                )
              </Grid>
              {this.state.cartItems
                .filter((item) => item.isUsed === false)
                .filter((item) => item.isDeleted === false)
                .map((item, index) => {
                  return (
                    <Grid
                      container
                      direction="row"
                      xs={12}
                      alignItems="flex-start"
                      justify="flex-start"
                      className="checkout-itemDescription"
                    >
                      <Grid
                        direction="column"
                        className="myCart-itemDescription--image"
                        alignItems="center"
                        justify="center"
                        xs={12}
                        sm={1}
                      >
                        <img
                          src={`${item.bookImage}`}
                          height="100px"
                          width="70px"
                          alt="bookCover"
                        />
                      </Grid>
                      <Grid item direction="column">
                        <Grid className="checkout-itemDescription--title">
                          {item.title}
                        </Grid>
                        <Grid
                          container
                          className="checkout-itemDescription--author"
                        >
                          by {item.author}
                        </Grid>
                        <Grid className="checkout-itemDescription--price">
                          Rs. {item.price}
                        </Grid>
                      </Grid>
                    </Grid>
                  );
                })}
              <Grid
                container
                item
                direction="row"
                alignItems="center"
                justify="flex-end"
                className="checkout-submit"
              >
                <button
                  className="checkout-submit--button"
                  onClick={()=>this.purchaseOrder()}
                >
                  CHECKOUT
                </button>
              </Grid>
            </Grid>
          </Container>
          <Footer></Footer>
        </Grid>
      </React.Fragment>
    );
  }
}
