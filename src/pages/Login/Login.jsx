import React from "react";
import Card from "@material-ui/core/Card";
import "./Login.scss";
import Loginimage from "./../../assets/Loginimage.jpg";
import Logo from "./../../component/logo/Logo";
import { TextField, Button } from "@material-ui/core";
import Container from '@material-ui/core/Container';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
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
      !/^[a-zA-Z0-9]{1,}([.]?[-]?[+]?[a-zA-Z0-9]{1,})?[@]{1}[a-zA-Z0-9]{1,}[.]{1}[a-z]{2,3}([.]?[a-z]{2})?$/.test(this.state.email)
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
    } else if (!/^[a-zA-Z0-9]*[@#$&*_+-]{1}[a-zA-Z0-9]*$/.test(this.state.password)) {
      this.setState({
        snackbarOpen: true,
        snackbarMsg: "Invalid Password..!!",
      });
    }
  };

 render() {
    return (
   <div>
    <div className="LoginLogo">
    <Container maxWidth="xl">
            <Logo/>
     </Container>
    </div>
    <div className="Login">
      <Card className="LoginCard" variant="outlined">
        <div className="loginImage">
        <img src={Loginimage} alt="Book logo" height="120px" width="300px"/>
        </div>
        <span className="Bookstore">Login</span>
        <br/>
        <div className="Loginform">
              <TextField
              className="name"
              name="email"
              variant="outlined"
              id="outlined-required"
              label={<div className="inputfont">Email</div>}
            />
            <br/>
            <TextField
                className="name"
                name="password"
                id="outlined-adornment-password"
                type={this.state.showPassword ? "text" : "password"}
                variant="outlined"
                label={<div className="inputfont">Password</div>}
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
              <span className="textline">
              
                Passwords must be at least 8 characters.
            </span>
            <br/><br/>
            <div className="buttonLogin">
        <div>
          <Button
            className="signup"
            color= "#0423ce"
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
            style={{ width: "90px", padding: "7px 0px", fontSize: "12px" }}
            onClick={this.submitUserSignInForm}
          >
            Login
          </Button>
        </div>
        </div>
            </div>
      </Card>
    </div>
    </div>
    );
  }
}
export default Login;