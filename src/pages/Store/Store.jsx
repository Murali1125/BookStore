import React, { Component } from "react";
import Header from "./../../component/header/Header";
import Footer from "../../component/Footer/Footer";
import { Grid, Container } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import Book from "../../component/Book/Book";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import BookStoreService from "./../../service/bookStoreService";
import CartService from "./../../service/cartService";
import "./Store.scss";

const bookStoreService = new BookStoreService();
const cartService = new CartService();  
export default class Store extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      page: 1,
      itemsPerPage: 12,

      currentPosts: [],
    };
  }

  changePage = (event, value) => {
    this.setState({ page: value });
  };
  // Get all books api call
  getAllBooks = () => {
    bookStoreService.GetAllBooks().then((json) => {
      if (json.status === 200) {
        this.setState({ books: json.data.data });
      }
      console.log(json);
    });
  };

  // Get book by keyword
  onSearch = (value) => {
    if (value === "") {
      this.getAllBooks();
    } else {
      bookStoreService.GetAllBooksByKeyword(value).then((json) => {
        console.log(json);
        if (json.data.success === true) {
          this.setState({ books: [json.data.data] });
        } else {
          this.setState({ books: [] });
        }
      });
    }
  };

  // Sort books PRICE Low to High
  sortPriceLowToHigh = () => {
    bookStoreService
      .SortBooks("price", "ascending")
      .then((json) => {
        console.log("sorted");
        if (json.data.success === true) {
          this.setState({ books: json.data.data });
        }
      })
      .catch((err) => {
        console.log("Server Error.");
      });
  };

  // Sort books PRICE High to Low
  sortPriceHighToLow = () => {
    bookStoreService.SortBooks("price", "descending").then((json) => {
      console.log("sorted");
      if (json.data.success === true) {
        this.setState({ books: json.data.data });
      }
    });
  };

  // Add book to cart
  addToCart = (bookId) =>{
    console.log("book id", bookId, localStorage.getItem("Token"));
    cartService.AddToCart(bookId,localStorage.getItem("Token")).then((json)=>{
      console.log("Added to cart", json);
    })
  }

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
    this.props.history.push("/");
  };

  componentDidMount() {
    this.getAllBooks();
  }
  render() {
    return (
      <React.Fragment>
        <Grid container direction="column">
          <Header
            variant="rich"
            onSearch={(value) => this.onSearch(value)}
            onProfileClick={() => this.onProfileClick()}
            onLogout={()=>this.onLogoutClick()}
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
                  &nbsp;({this.state.books.length} items)
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
                >
                  <span>Sort by relevance</span>
                  <ExpandMoreIcon className="opendropdown" />
                  <ExpandLessIcon className="closedropdown" />
                </Grid>
                <ul className="dropmenu">
                  <li onClick={() => this.sortPriceLowToHigh()}>
                    Price : Low to High
                  </li>
                  <li onClick={() => this.sortPriceHighToLow()}>
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
              {this.state.books === [] ? (
                <Grid
                  container
                  item
                  md={3}
                  sm={6}
                  xs={12}
                  className="singleBookContainer"
                  alignItems="center"
                  justify="center"
                >
                  No books
                </Grid>
              ) : (
                this.state.books
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
                        <Book addToCart={(bookId)=>this.addToCart(bookId)}>{book}</Book>
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
                  this.state.books.length / this.state.itemsPerPage
                )}
                page={this.state.page}
                onChange={(event, value) => this.changePage(event, value)}
                defaultPage={1}
              />
            </Grid>
          </Container>
          <Footer />
        </Grid>
      </React.Fragment>
    );
  }
}
