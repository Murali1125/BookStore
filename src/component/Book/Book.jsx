import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import "./Book.scss";
import bookCover from "./../../assets/bookCover.jpg";
import Truncate from "react-truncate";
import Tooltip from "react-tooltip-lite";

export default class Book extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addToBagClicked: false,
      wishlistClicked: false,
    };
  }

  // Click handler for add to bag button
  AddToBagHandler = (bookId) => {
    if (this.state.addToBagClicked === false) {
      this.setState({
        addToBagClicked: true,
      },this.props.addToCart(bookId));
    } else {
      this.setState({
        addToBagClicked: false,
      });
    }
  };

  // click handler for add to woshlist button
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

  normalButtons =(bookId) => (
    <div className="bookButtons">
      <div
        className="addToBag"
        onClick={() =>
          this.AddToBagHandler(bookId)
        }
      >
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
      <div className="wishlisted">ADDED TO WISHLIST</div>
    </div>
  );

  render() {
    return (
      <React.Fragment>
        <div className="book">
          <Tooltip
            content={<div>{this.props.children.description}</div>}
            direction="right-start"
          >
            <Grid
              container
              item
              alignItems="center"
              justify="center"
              className="bookImage"
            >
              <img
                src={bookCover}
                height="130px"
                width="90px"
                alt="bookCover"
              />
            </Grid>
          </Tooltip>

          <Grid
            container
            item
            direction="column"
            alignItems="flex-start"
            justify="flex-start"
            className="bookInfo"
          >
            <Truncate
              className="bookTitle"
              lines={1}
              ellipsis={
                <span className="show">
                  ... <span className="hide">{this.props.children.title}</span>
                </span>
              }
            >
              {this.props.children.title}
            </Truncate>
            <Truncate
              className="bookAuthor"
              lines={1}
              ellipsis={
                <span className="show">
                  ... <span className="hide">{this.props.children.author}</span>
                </span>
              }
            >
              by {this.props.children.author}
            </Truncate>
            <div className="bookPrice">Rs. {this.props.children.price}</div>
            {this.state.addToBagClicked
              ? this.afterClickOnAdd
              : this.state.wishlistClicked
              ? this.afterClickOnwishlist
              : this.normalButtons(this.props.children.bookId)}
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}
