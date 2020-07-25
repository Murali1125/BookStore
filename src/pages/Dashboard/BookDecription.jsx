import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import "./DashboardAdmin.scss";
import DoneOutlinedIcon from "@material-ui/icons/DoneOutlined";
import ClearOutlinedIcon from "@material-ui/icons/ClearOutlined";
import ImageIcon from "@material-ui/icons/Image";
import { AddBook, UpdateBook, ImageBook } from "./../../service/AdminServices";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { Alert } from "@material-ui/core";

class BookDecription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditable: false,
      anchorEl: null,
      title: "",
      decription: "",
      author: "",
      image: null,
      imageUrl: null,
      price: "",
      quantity: "",
      bookId: null,
      status: "addBook",
      snackbarOpen: false,
      snackBarMessage: "",
      snackbarSeverity: "success",
    };
  }

  // on change of any field
  onChange = (eve) => {
    this.setState({
      [eve.target.name]: eve.target.value,
    });
  };
  //on change of image file
  fileChangedHandler = (event) => {
    event.preventDefault();
    this.setState({
      image: event.target.files[0],
      bookImage: URL.createObjectURL(event.target.files[0]),
    });
    console.log("imageUrl", this.state.bookImage);
    ImageBook(this.state.bookId, event.target.files[0]).then((json) => {
      console.log("response data", json);
    });
  };
  // if the book data is present show the book data
  componentDidMount() {
    if (Boolean(this.props.bookData)) {
      this.setState({
        title: this.props.bookData.title,
        decription: this.props.bookData.description,
        author: this.props.bookData.author,
        bookImage: this.props.bookData.bookImage,
        price: this.props.bookData.price,
        quantity: this.props.bookData.booksAvailable,
        bookId: this.props.bookData.bookId,
        status: "updateBook",
      });
    }
  }
  // when Click save validate it is update or new add book
  // call reltive api
  onSave = async () => {
    // make book object with book details
    let Book = {
      Title: this.state.title,
      Description: this.state.decription,
      Author: this.state.author,
      BooksAvailable: this.state.quantity,
      Price: this.state.price,
    };
    // if it is update book call update api
    if (this.state.status === "updateBook") {
      await UpdateBook(Book, this.state.bookId)
        .then((responce) => {
          console.log("book updated sucessfully", responce);
          if (responce.sucess === true) {
            this.setState({
              snackbarOpen: true,
              snackBarMessage: "Book Sucessfully updated",
              snackbarSeverity: "success",
            });
          }
        })
        .catch((error) => {
          console.log(error);
          this.setState({
            snackbarOpen: true,
            snackBarMessage: error.message,
            snackbarSeverity: "error",
          });
        });
    } else {
      // else call add book api
      await AddBook(Book)
        .then((responce) => {
          console.log("book added sucessfully", responce);
          this.setState({
            snackbarOpen: true,
            snackBarMessage: "Book Sucessfully Added",
            snackbarSeverity: "success",
          });
        })
        .catch((error) => {
          this.setState({
            snackbarOpen: true,
            snackBarMessage: error.message,
            snackbarSeverity: "error",
          });
        });
    }
    // callback function to close dialog box
    this.props.closeDialog(Book.Title);
  };
  // snackbar method
  SnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.setState({
      snackbarOpen: false,
      snackBarMessage: "",
      snackbarSeverity: "success",
    });
  };

  render() {
    return (
      <div className="BookDetailsAdmin">
        {/* <Snackbar open={this.state.snackbarOpen} autoHideDuration={6000} onClose={this.SnackbarClose}>
                    <Alert onClose={this.SnackbarClose} severity={this.state.snackbarSeverity}>
                        {this.state.snackBarMessage}
                    </Alert>
                </Snackbar>             */}
        <div className="imageContainerAdmin">
          {this.state.bookImage !== null &&
          this.state.bookImage !== undefined ? (
            <img
              src={this.state.bookImage}
              className="BookImageAdmin"
              alt="BookImage"
              onClick={() => this.fileUpload.click()}
            />
          ) : (
            <div
              className="ImageIconText"
              onClick={() => this.fileUpload.click()}
            >
              <Button style={{ textTransform: "none" }}>
                <ImageIcon />
                BookImage
              </Button>
            </div>
          )}
          <input
            type="file"
            style={{ display: "none" }}
            onChange={this.fileChangedHandler}
            ref={(fileUpload) => (this.fileUpload = fileUpload)}
          ></input>
        </div>
        <div>
          <TextField
            className="titleField"
            value={this.state.title}
            variant="outlined"
            label="Title"
            name="title"
            size="small"
            fullWidth
            inputProps={{ style: { fontSize: "14px" } }}
            onChange={this.onChange}
          />
        </div>
        <div>
          <TextField
            className="authorField"
            value={this.state.author}
            fullWidth
            variant="outlined"
            label="Author"
            name="author"
            size="small"
            inputProps={{ style: { fontSize: "14px" } }}
            onChange={this.onChange}
          />
        </div>
        <div>
          <TextField
            className="decriptionField"
            value={this.state.decription}
            multiline
            fullWidth
            rowsMax="6"
            variant="outlined"
            label="Decription"
            name="decription"
            size="small"
            inputProps={{ style: { fontSize: "14px" } }}
            onChange={this.onChange}
          />
        </div>
        <div>
          <TextField
            className="priceField"
            value={this.state.price}
            variant="outlined"
            label="Price"
            fullWidth
            type="number"
            name="price"
            size="small"
            inputProps={{ style: { fontSize: "14px" } }}
            onChange={this.onChange}
          />
        </div>
        <div>
          <TextField
            className="quantityField"
            value={this.state.quantity}
            type="number"
            variant="outlined"
            label="Quantity"
            fullWidth
            name="quantity"
            size="small"
            inputProps={{ style: { fontSize: "14px" } }}
            onChange={this.onChange}
          />
        </div>

        <div className="ButtonsBookDetailsAdmin">
          <Button
            style={{
              color: "white",
              backgroundColor: "#4285F4",
              textTransform: "none",
            }}
            onClick={this.onSave}
          >
            <DoneOutlinedIcon /> Save
          </Button>
          <Button
            style={{
              backgroundColor: "#61605e",
              color: "white",
              textTransform: "none",
            }}
            onClick={this.props.closeDialog}
          >
            <ClearOutlinedIcon /> Cancel
          </Button>
        </div>
      </div>
    );
  }
}

export default BookDecription;
