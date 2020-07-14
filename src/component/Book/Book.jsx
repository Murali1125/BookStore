import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import "./Book.scss";
import bookCover from "./../../assets/bookCover.jpg";

export default class Book extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addToBagClicked: false,
      wishlistClicked: false,
    };
  }

  AddToBagHandler = () => {
    if (this.state.addToBagClicked === false) {
      this.setState({
        addToBagClicked: true,
      });
    } else {
      this.setState({
        addToBagClicked: false,
      });
    }
  };

  AddtoWishlist = () => {
    if (this.state.wishlistClicked === false) {
      this.setState({
        wishlistClicked: true,
      });
    } else {
      this.setState({
        wishlistClicked: false,
      });
    }
  };

  normalButtons = (
    <div className="bookButtons">
      <div className="addToBag" onClick={() => this.AddToBagHandler()}>
        ADD TO BAG
      </div>
      <div className="wishlist" onClick={() => this.AddtoWishlist()}>
        WISHLIST
      </div>
    </div>
  );

  afterClickOnAdd = (
    <div className="bookButtons">
      <div className="addedToBag">ADDED TO BAG</div>
    </div>
  );

  afterClickOnwishlist = (
    <div className="bookButtons">
      <div className="wishlisted">WISHLIST</div>
    </div>
  );

  render() {
    return (
      <React.Fragment>
        <div className="book">
          <Grid
            container
            item
            alignItems="center"
            justify="center"
            className="bookImage"
          >
            <img src={bookCover} height="130px" width="90px" alt="bookCover" />
          </Grid>
          <Grid
            container
            item
            direction="column"
            alignItems="flex-start"
            justify="flex-start"
            className="bookInfo"
          >
            <div className="bookTitle">Don't Make Me Think</div>
            <div className="bookAuthor">by Steve Krug</div>
            <div className="bookPrice">Rs. 1500</div>
            {this.state.addToBagClicked
              ? this.afterClickOnAdd
              : this.state.wishlistClicked
              ? this.afterClickOnwishlist
              : this.normalButtons}
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}
