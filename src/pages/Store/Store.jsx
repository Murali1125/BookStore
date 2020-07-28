import React, { Component } from "react";
import Header from "./../../component/header/Header";
import Footer from "../../component/Footer/Footer";
import Logo from "./../../component/logo/Logo";
import { Grid, Container } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import Book from "../../component/Book/Book";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import CartService from "./../../service/cartService";
import WishlistService from "./../../service/wishlistService";
import { withRouter } from 'react-router-dom'
import {connect} from "react-redux"
import {getStoreBooks, searchStoreBooks, sortPriceLowToHigh, sortPriceHighToLow,getCart} from "./../../redux/actions/StoreActions.js"
import "./Store.scss";

const cartService = new CartService();
const wishlistService = new WishlistService();

class Store extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      page: 1,
      itemsPerPage: 12,
      itemsInCart: 0,
      popupStatus: "popup-hidden",
      cartItemsNo: 0,
    };
  }

  changePage = (event, value) => {
    this.setState({ page: value });
  };

  // Add book to cart
  addToCart = (bookId) => {
    cartService
      .AddToCart(bookId, 1, localStorage.getItem("Token"))
      .then((json) => {
        this.props.getCartLength();
      });
  };

  // Add book to wishlist
  addTowishlist = (bookId) => {
    const token = localStorage.getItem("Token");
    wishlistService.AddToWishlist(bookId, token).then((json) => {});
  };

  onProfileClick = () => {
    if (localStorage.getItem("Token")) {
      this.props.history.push("/profile");
    } else {
      this.props.history.push("/login");
    }
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

  getNoOfItemsInCart = (value) => {
    this.setState({ itemsInCart: value });
  };

  openPopup = () => {
    if (!localStorage.getItem("Token")) {
      this.setState({ popupStatus: "popup-show" });
    }
  };

  closePopup = () => {
    if (this.state.popupStatus === "popup-show") {
      this.setState({ popupStatus: "popup-hidden" });
    }
  };

  goToStore = () => {
    this.props.history.push("/");
  };

  goToLogin = () => {
    this.props.history.push("/login");
  };
  goToRegister = () => {
    this.props.history.push("/register");
  };
  goToCart = () => {
    this.props.history.push("/checkout");
  };
  getCart = () => {
    cartService.GetCart(localStorage.getItem("Token")).then((json) => {
      this.setState({
        cartItemsNo: json.data.data.length,
      });
    });
  };

  componentDidMount() {
    this.props.showBooks();
    this.props.getCartLength();
  }

  render() {
    return (
      <React.Fragment>
        <div
          className={this.state.popupStatus}
          onClick={(event) => this.closePopup(event)}
        >
          <div className="popupDialog">
            <div className="popupHeaderLogo">
              <Logo></Logo>
            </div>
            <div className="popupHeader">You are not logged in !!!</div>
            <div className="popupDeclaration">
              If you are returning Customer
            </div>

            <div className="popupInfo">
              <div className="popupKey">
                <div>Please</div>
              </div>
              <div className="popupButtons">
                <div className="button" onClick={() => this.goToLogin()}>
                  Login
                </div>
              </div>
            </div>

            <div className="popupDeclaration">If you are new to our store</div>
            <div className="popupInfo">
              <div className="popupKey">
                <div>Please</div>
              </div>
              <div className="popupButtons">
                <div className="button" onClick={() => this.goToRegister()}>
                  Register
                </div>
              </div>
            </div>
          </div>
        </div>

        <Grid container direction="column">
          <Header
            variant="rich"
            onSearch={(value) => this.props.onSearch(value)}
            onProfileClick={() => this.onProfileClick()}
            onLogout={() => this.onLogoutClick()}
            goToStore={() => this.goToStore()}
            goToLogin={() => this.goToLogin()}
            goToRegister={() => this.goToRegister()}
            goToCart={() => this.goToCart()}
            cartItemsNo={this.state.cartItemsNo}
          ></Header>
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
                xs={6}
                alignItems="baseline"
                justify="flex-start"
                className="booksHeader"
              >
                Books
                <span className="bookCount">
                  &nbsp;({this.props.books.length} items)
                </span>
              </Grid>
              <Grid
                container
                item
                xs={6}
                justify="flex-end"
                alignItems="baseline"
                className="booksSort"
              >
                <Grid
                  container
                  item
                  alignItems="baseline"
                  className="dropdown"
                  justify="flex-end"
                  style={{ backgroundColor: "#fff" }}
                >
                  <span>Sort by relevance</span>
                  <ExpandMoreIcon className="opendropdown" />
                  <ExpandLessIcon className="closedropdown" />
                </Grid>
                <ul className="dropmenu">
                  <li onClick={() => this.props.sortPriceLowToHigh()}>
                    Price : Low to High
                  </li>
                  <li onClick={() => this.props.sortPriceHighToLow()}>
                    Price : High to Low
                  </li>
                </ul>
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
              {this.props.books.length === 0 ? (
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
                this.props.books
                  .filter((book) => book.isDeleted === false)
                  .slice(
                    (this.state.page - 1) * this.state.itemsPerPage,
                    this.state.page * this.state.itemsPerPage
                  )
                  .map((book, index) => {
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
                          addToCart={(bookId) => this.addToCart(bookId)}
                          addToWishlist={(bookId) => this.addTowishlist(bookId)}
                          openPopup={() => this.openPopup()}
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
                  this.props.books.length / this.state.itemsPerPage
                )}
                page={this.state.page}
                onChange={(event, value) => this.changePage(event, value)}
                defaultPage={1}
                color="secondary"
              />
            </Grid>
          </Container>
        </Grid>
        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.store.books,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showBooks: () => dispatch(getStoreBooks()),
    onSearch: (value) => dispatch(searchStoreBooks(value)),
    sortPriceLowToHigh: () => dispatch(sortPriceLowToHigh()),
    sortPriceHighToLow: () => dispatch(sortPriceHighToLow()),
    getCartLength: () => dispatch(getCart()),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Store));
