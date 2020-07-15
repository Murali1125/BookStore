import React, { Component } from "react";
import Header from "./../../component/header/Header";
import { Grid, Container } from "@material-ui/core";
import Footer from "../../component/Footer/Footer";
import bookCover from "./../../assets/bookCover.jpg";

import "./Checkout.scss";
export default class Checkout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showFullDescription: "customerDetails showPreview",
      cartItems: [
        {
          title: "Don't Make Me Think",
          author: "Steve King",
          price: 1500,
          count: 10,
          image: bookCover,
        },
        {
          title: "Don't Make Me Think Again",
          author: "Steve King",
          price: 3500,
          count: 17,
          image: bookCover,
        },
        {
          title: "Don't Make Me Think About That Thought",
          author: "Steve King",
          price: 1800,
          count: 4,
          image: bookCover,
        },
      ],
    };
  }

  placeOrder = () => {
    this.setState({
      showFullDescription: "customerDetails",
    });
  };

  render() {
    return (
      <React.Fragment>
        <Grid container direction="column">
          <Header variant="rich"></Header>
          <Container maxWidth="lg" className="checkoutContainer">
            {/*  my cart ***************************************************************************** */}
            <Grid container direction="column" className="myCart">
              <Grid container item className="myCart-header">
                My cart ({this.state.cartItems.length})
              </Grid>
              {this.state.cartItems.map((item, index) => {
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
                        src={bookCover}
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
                        <div className="myCart-itemDescription--count-minus">
                          &mdash;
                        </div>
                        <input
                          type="number"
                          defaultValue="1"
                          max={item.count}
                          min={1}
                          className="myCart-itemDescription--count-value"
                        ></input>
                        <div className="myCart-itemDescription--count-plus">
                          &#43;
                        </div>
                        <Grid>Remove</Grid>
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
                  className="myCart-submit--button"
                  onClick={this.placeOrder}
                >
                  PLACE ORDER
                </button>
              </Grid>
            </Grid>

            {/* details ****************************************************************** */}
            <Grid
              container
              direction="column"
              className={this.state.showFullDescription}
            >
              <Grid container item className="customerDetails-header">
                Customer Details
              </Grid>
              <Grid container item className="customerDetails-detailForm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
                et culpa id nostrum facere explicabo consequatur amet aliquid
                repellendus laudantium magnam quasi assumenda mollitia, fugiat
                ipsa quisquam tempore? Ea, nemo?
              </Grid>
              <Grid
                container
                item
                direction="row"
                alignItems="center"
                justify="flex-end"
                className="customerDetails-continue"
              >
                <button className="customerDetails-continue--button">
                  CONTINUE
                </button>
              </Grid>
            </Grid>

            <Grid container direction="column" className="checkout">
              <Grid container item className="checkout-header">
                My cart ({this.state.cartItems.length})
              </Grid>
              {this.state.cartItems.map((item, index) => {
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
                        src={bookCover}
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
                  onClick={this.placeOrder}
                >
                  PLACE ORDER
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
