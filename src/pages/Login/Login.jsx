import React from "react";
import Card from "@material-ui/core/Card";
import "./Login.scss";
import Loginimage from "./../../assets/Loginimage.jpg";
import Logo from "./../../component/logo/Logo";
import Footer from "./../../component/Footer/Footer";
import { TextField, Snackbar, Button } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
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
      snackbarOpen: false,
      snackbarMsg: "",
      email: "",
      password: "",
    };
  }
  signIn = () => {
    if (this.state.email === "") {
      this.setState({
        snackbarOpen: true,
        snackbarMsg: "Email is Required",
      });
    } else if (
      !/^[a-zA-Z0-9]{1,}([.]?[-]?[+]?[a-zA-Z0-9]{1,})?[@]{1}[a-zA-Z0-9]{1,}[.]{1}[a-z]{2,3}([.]?[a-z]{2})?$/.test(
        this.state.email
      )
    ) {
      this.setState({
        snackbarOpen: true,
        snackbarMsg: "Invalid Email..!",
      });
    } else if (this.state.password === "") {
      this.setState({
        snackbarOpen: true,
        snackbarMsg: "Password is required",
      });
    } else if (
      !/^[a-zA-Z0-9]*[@#$&*_+-]{1}[a-zA-Z0-9]*$/.test(this.state.password)
    ) {
      this.setState({
        snackbarOpen: true,
        snackbarMsg: "Invalid Password..!!",
      });
    }else {
      const user = {
        email: this.state.email,
        password: this.state.password,
      };
      service
        .Login(user)
        .then((json) => {
          console.log("responce data==>", json);
          if (json.status === 200) {
            this.setState({
              snackbarOpen: true,
              snackbarMsg: "Login Suceesful..!",
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  render() {
    return (
      <div className="checkoutPage">
        <div className="LoginLogo">
          <Container maxWidth="xl">
            <Logo />
          </Container>
        </div>
        <div className="Login">
          <Snackbar
            open={this.state.snackbarOpen}
            autoHideDuration={3000}
            onClose={this.snackbarClose}
          >
            <Alert onClose={this.snackbarClose} severity="error">
              {<span> {this.state.snackbarMsg}</span>}
            </Alert>
          </Snackbar>
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
                label={<div className="inputfont">Email</div>}
                defaultValue={this.state.email}
                onChange={this.handleChangeText}
              />
              <br />
              <TextField
                className="name"
                name="password"
                id="outlined-adornment-password"
                type={this.state.showPassword ? "text" : "password"}
                variant="outlined"
                label={<div className="inputfont">Password</div>}
                defaultValue={this.state.password}
                onChange={this.handleChangeText}
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
        <br /><br /><br /><br />
        <div>
           <Footer />
        </div>
      </div>
    );
  }
}
export default Login;
