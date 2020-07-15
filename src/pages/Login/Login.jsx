import React from "react";
import Card from "@material-ui/core/Card";
import "./Login.scss";
import Loginimage from "./../../assets/Loginimage.jpg";
import Logo from "./../../component/logo/Logo";
import Alert from "@material-ui/lab/Alert";
import Footer from "./../../component/Footer/Footer";
import { TextField, Snackbar, Button } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import userServices from "./../../service/userServices";
let service = new userServices();

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
      openSnackbar: false,
      snackbarVarient: "error",
      email: "",
      password: "",
      responseMessage: "",
      emailErrorStatus: false,
      emailErrorMessage: "",
      emailValid: false,
      passwordErrorStatus: false,
      passwordErrorMessage: "",
      passwordValid: false,
    };
  }
  handleEmailChange = (e) => {
    this.setState({ email: e.target.value }, (email) =>
      this.validateEmail(this.state.email)
    );
  };
  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value }, (password) =>
      this.validatePassword(this.state.password)
    );
  };

  /* =====================================
    VALIDATIONS
    =======================================*/
  validateEmail = (input) => {
    const regexEmail = new RegExp(
      /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/
    );
    let error = regexEmail.test(String(input)) ? "" : "Not a valid email";
    if (error === "") {
      this.setState({ emailErrorStatus: false });
      this.setState({ emailErrorMessage: error });
      this.setState({ emailValid: true });
    } else {
      this.setState({ emailErrorStatus: true });
      this.setState({ emailErrorMessage: error });
      this.setState({ emailValid: false });
    }
  };
  validatePassword = (input) => {
    const regexPassword = new RegExp(
      /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/
    );
    let error = regexPassword.test(String(input)) ? "" : "Invalid Password";
    if (error === "") {
      this.setState({ passwordErrorStatus: false });
      this.setState({ passwordErrorMessage: error });
      this.setState({ passwordValid: true });
    } else {
      this.setState({ passwordErrorStatus: true });
      this.setState({ passwordErrorMessage: error });
      this.setState({ passwordValid: false });
    }
  };

  signIn = () => {
    if (!this.state.emailValid) {
      this.setState({ responseMessage: "Invalid email" });
      this.setState({ snackbarVarient: "error" });
      this.setState({ OpenSnackbar: true });
    } else if (!this.state.passwordValid) {
      this.setState({ responseMessage: "Invalid Password" });
      this.setState({ snackbarVarient: "error" });
      this.setState({ OpenSnackbar: true });
    } else {
      const user = {
        email: this.state.email,
        password: this.state.password,
      };
      console.log("user Data", user);
      service
        .Login(user)
        .then((json) => {
          console.log("responce data==>", json);
          if (json.status === 200) {
            localStorage.setItem("Token", json.data.jsonToken);
            localStorage.setItem("FirstName", json.data.data.firstName);
            localStorage.setItem("LastName", json.data.data.lastName);
            localStorage.setItem("Email", json.data.data.email);
            localStorage.setItem("Address", json.data.data.address);
            localStorage.setItem("City", json.data.data.city);
            localStorage.setItem("Phone Number", json.data.data.phoneNumber);
            this.setState({ responseMessage: "Login Successful" });
            this.setState({ snackbarVarient: "success" });
            this.setState({ OpenSnackbar: true });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.setState({ OpenSnackbar: false });
  };

  render() {
    return (
      <div className="checkoutPage">
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={this.state.OpenSnackbar}
          autoHideDuration={3000}
          onClose={this.handleClose}
        >
          <Alert
            onClose={this.handleClose}
            severity={this.state.snackbarVarient}
          >
            {this.state.responseMessage}
          </Alert>
        </Snackbar>
        <div className="LoginLogo">
          <Container maxWidth="xl">
            <Logo />
          </Container>
        </div>
        <div className="Login">
          <Card className="LoginCard" variant="outlined">
            <div className="loginImage">
              <img
                src={Loginimage}
                alt="Book logo"
                height="120px"
                width="300px"
              />
            </div>
            <span className="Bookstore">Login</span>
            <br />
            <div className="Loginform">
              <TextField
                className="name"
                name="email"
                variant="outlined"
                id="outlined-required"
                label="Email"
                required
                onChange={(e) => this.handleEmailChange(e)}
                error={this.state.emailErrorStatus}
                helperText={this.state.emailErrorMessage}
              />
              <br />
              <TextField
                className="name"
                name="password"
                id="outlined-adornment-password"
                type={this.state.showPassword ? "text" : "password"}
                variant="outlined"
                required
                label="Password"
                onChange={(e) => this.handlePasswordChange(e)}
                error={this.state.passwordErrorStatus}
                helperText={this.state.passwordErrorMessage}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end" sytle={{ width: "1px" }}>
                      <IconButton
                        onClick={() =>
                          this.setState({
                            showPassword: !this.state.showPassword,
                          })
                        }
                      >
                        {this.state.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <br />
              <br />
              <div className="buttonLogin">
                <div>
                  <Button
                    className="signup"
                    color="primary"
                    onClick={() => this.props.history.push("/register")}
                  >
                    Create account
                  </Button>
                </div>
                <div>
                  <Button
                    className="button-Login"
                    variant="contained"
                    color="primary"
                    onClick={this.signIn}
                  >
                    Login
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}
export default Login;
