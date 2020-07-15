import React, { Component } from "react";
import Header from "./../../component/header/Header";
import Footer from "../../component/Footer/Footer";
import { Grid, Container } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import Book from "../../component/Book/Book";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

import "./Store.scss";
export default class Store extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    };
  }

  render() {
    return (
      <React.Fragment>
        <Grid container direction="column">
          <Header variant="rich"></Header>
          <Container maxWidth="lg" className="storeContainer">
            <Grid
              container
              item
              direction="row"
              alignItems="center"
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
                Books<span className="bookCount">&nbsp;(123 items)</span>
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
                  <li>Price : Low to High</li>
                  <li>Price : High to Low</li>
                  
                </ul>
              </Grid>
            </Grid>
            <Grid
              container
              item
              direction="row"
              alignItems="center"
              justify="center"
              className="booksContainer"
            >
              {this.state.books.map((book, index) => {
                return (
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
                    <Book />
                  </Grid>
                );
              })}
            </Grid>
            <Grid
              container
              item
              alignItems="center"
              justify="center"
              className="pagination"
            >
              <Pagination count={16} />
            </Grid>
          </Container>
          <Footer />
        </Grid>
      </React.Fragment>
    );
  }
}
