import React from "react";
import "./Checkout.scss";
import Card from "@material-ui/core/Card";
import CheckoutMessage from "./../../assets/CheckoutMessage.jpg";
import { Button } from "@material-ui/core";
import Header from "./../../component/header/Header";
import Container from "@material-ui/core/Container";
import Table from '@material-ui/core/Table';  
import TableBody from '@material-ui/core/TableBody';  
import TableCell from '@material-ui/core/TableCell';   
import TableHead from '@material-ui/core/TableHead';  
import TableRow from '@material-ui/core/TableRow';  

export class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

   render() {
    return (
      <div className="checkoutPage">
        <div className="checkoutLogo">
          <Container maxWidth="xl">
            <Header />
          </Container>
        </div>
        <div className="checkout">
          <div className="checkoutimage">
            <img
                src={CheckoutMessage}
                alt="Book logo"
                height="300px"
                width="350px"
              />
          </div>
          <br/>
          <div className="paymentComfirm">
                <span>Hurray!!!your order is confirmed </span>
            <span> Your order is #123456 save order id for </span>
               <span> for further communication </span>
          </div>
          <br/><br/><br/>
          <div className="table">
          <Card>
            <Table stickyHeader aria-label="sticky table" className='aboutus'>  
          <TableHead>  
            <TableRow>  
              <TableCell align="center">Email Id</TableCell>  
              <TableCell align="center" >Contact us</TableCell>  
              <TableCell align="center" >Address</TableCell>  
            </TableRow>  
          </TableHead>  

          <TableBody>  
            <TableRow>
                  <TableCell align="center">admin@bookstore.com</TableCell>  
                  <TableCell align="center">+918163475881</TableCell>  
                  <TableCell align="center">42, 14th Main, 15th Cross,Sector 4,opp to BDA complex, near Kumarakom restraurant,HSR Layout,Banglore 560034</TableCell>  
                  
                </TableRow>     
          </TableBody>  
        </Table>  
        </Card>
          </div>
        <br/><br/>
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
      </div>
    );
  }
}
export default Checkout;