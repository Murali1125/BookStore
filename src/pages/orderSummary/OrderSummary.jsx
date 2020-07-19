import React from "react";
import "./OrderSummary.scss";
import Card from "@material-ui/core/Card";
import CheckoutMessage from "./../../assets/CheckoutMessage.jpg";
import { Button } from "@material-ui/core";
import Header from "./../../component/header/Header";
import Footer from "./../../component/Footer/Footer";
import Container from "@material-ui/core/Container";

export default function OrderSummary() {

    return (
      <div className="orderPage">
        <div className="orderLogo">
          <Container maxWidth="xl">
            <Header variant="normal" />
          </Container>
        </div>
        <div className="order">
          <div className="orderimage">
            <img
              src={CheckoutMessage}
              alt="Book logo"
              height="300px"
              width="350px"
            />
          </div>
          <br />
          <div className="paymentComfirm">
            <span>Hurray!!!your order is confirmed </span>
            <span> Your order is #123456 save order id for </span>
            <span> for further communication </span>
          </div>
          <br />
          <br />
          <br />
          <div>
            <Card className="table">
              <div className="aboutus">
                <div className="email">
                  <div className="header">
                    Email Id
                  </div>
                  <br/>
                  <div className="header">
                    admin@bookstore.com
                  </div>
                </div>
                <div className="email">
                  <div className="header">
                    Contact us
                  </div>
                  <br/>
                  <div className="header">
                    +91816347588
                  </div>
                </div>
                <div className="address">
                  <div className="header">
                    Address
                  </div>
                  <br/>
                  <div className="header">
                     42, 14th Main, 15th Cross,Sector 4,opp to BDA complex,
                      near Kumarakom restraurant,HSR Layout,Banglore 560034
                  </div>
                </div>
              </div>
            </Card>
          </div>
          <br />
          <br />
          <div>
            <Button
              className="button-Login"
              variant="contained"
              color="primary"
            >
              CONTINUE SHOPPING
            </Button>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
}
