import React from "react";
import "./Profile.scss";
import Card from "@material-ui/core/Card";
import Header from "./../../component/header/Header";
import Footer from "./../../component/Footer/Footer";
import Container from "@material-ui/core/Container";
import { Grid } from "@material-ui/core";
import Book from "../../component/Book/Book";
import Pagination from "@material-ui/lab/Pagination";
import WishlistService from "./../../service/wishlistService";
import CartService from "./../../service/cartService";

const wishlistService = new WishlistService();
const cartService = new CartService();

export class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      wishlist: [],
      page: 1,
      itemsPerPage: 12,
    };
  }

  changePage = (event, value) => {
    this.setState({ page: value });
  };
  // Get all books api call
  getAllWishlist = () => {
    wishlistService.GetWishlist(localStorage.getItem("Token")).then((json) => {
      if (json.status === 200) {
        this.setState({
          wishlist: json.data.data,
        });
      }
      console.log("All books", json);
    });
  };

  addToCart = (wishlistId) => {
    cartService
      .AddToCartFromWishlist(wishlistId, localStorage.getItem("Token"))
      .then((json) => {
        console.log("Added to cart", json);
      });
  };

  removeFromwishlist = (wishlistId) => {
    wishlistService
      .RemoveFromWishlist(wishlistId, localStorage.getItem("Token"))
      .then((json) => {
         this.getAllWishlist();
      });
     
  };

  componentDidMount() {
    this.getAllWishlist();
  }

  render() {
    return (
      <div className="profilePage">
        <div className="profileLogo">
          <Container maxWidth="xl">
            <Header variant="rich" />
          </Container>
        </div>
        <div className="profile">
          <Card className="profileCard" variant="outlined">
            <div className="profileImage">
              <div className="name">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYF1Mjct6rfyPLrWjrjm8dAw9oZGyf-BNtaQ&usqp=CAU"
                  alt="avtar"
                  Width="100px"
                  height="100px"
                />
              </div>
              <div className="name">
                {localStorage.getItem("FirstName") +
                  " " +
                  localStorage.getItem("LastName")}
              </div>
            </div>
            <br />
            <br />
            <div className="profiledetails">
              <div className="profileName">
                <div className="name">First Name</div>
                <br />
                <div className="name">Last Name</div>
                <br />
                <div className="name">Email</div>
                <br />
                <div className="name">Address</div>
                <br />
                <div className="name">City</div>
                <br />
                <div className="name">Phone Number</div>
              </div>
              <div className="profileValue">
                <div className="name">{localStorage.getItem("FirstName")}</div>
                <br />
                <div className="name">{localStorage.getItem("LastName")}</div>
                <br />
                <div className="name">{localStorage.getItem("Email")}</div>
                <br />
                <div className="name">{localStorage.getItem("Address")}</div>
                <br />
                <div className="name">{localStorage.getItem("City")}</div>
                <br />
                <div className="name">
                  {localStorage.getItem("Phone Number")}
                </div>
              </div>
            </div>
          </Card>
        </div>
        <Container maxWidth="lg" className="storeContainer">
          <Grid
            container
            item
            direction="row"
            alignItems="flex-start"
            justify="center"
          >
            <Grid
              container
              item
              xs={12}
              alignItems="baseline"
              justify="flex-start"
              className="booksHeader"
            >
              Wishlist
              <span className="bookCount">
                &nbsp;({this.state.wishlist.filter(book => book.isDeleted ===false).length} items)
              </span>
            </Grid>
          </Grid>
          <Grid
            container
            item
            direction="row"
            alignItems="flex-start"
            justify="flex-start"
            className="booksContainer"
          >
            {this.state.wishlist.length === 0 ? (
              <Grid
                container
                item
                md={12}
                sm={6}
                xs={12}
                className="singleBookContainer"
                alignItems="center"
                justify="center"
                style={{ fontsize: 40 }}
              >
                No books Found
              </Grid>
            ) : (
              this.state.wishlist.filter(book => book.isDeleted ===false)
                .slice(
                  (this.state.page - 1) * this.state.itemsPerPage,
                  this.state.page * this.state.itemsPerPage
                )
                .map((book, index) => {
                  console.log(book)
                  return (
                    <Grid
                      container
                      item
                      key={index}
                      md={3}
                      sm={6}
                      xs={12}
                      className="singleBookContainer"
                      alignItems="center"
                      justify="center"
                    >
                      <Book
                        key={index}
                        addToCart={() => this.addToCart(book.wishListId)}
                        removeFromWishlist={() => this.removeFromwishlist(book.wishListId)}
                       
                        variant="wishlist"
                      >
                        {book}
                      </Book>
                    </Grid>
                  );
                })
            )}
          </Grid>
          <Grid
            container
            item
            alignItems="center"
            justify="center"
            className="pagination"
          >
            <Pagination
              count={Math.ceil(
                this.state.wishlist.length / this.state.itemsPerPage
              )}
              page={this.state.page}
              onChange={(event, value) => this.changePage(event, value)}
              defaultPage={1}
            />
          </Grid>
        </Container>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}
export default Profile;
