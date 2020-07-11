import React from "react";
import "./Register.scss";
import { TextField, Button} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Logo from "./../../component/logo/Logo";
import Container from '@material-ui/core/Container';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       showPassword: false,
    };
  }
  
  Register = () => {
    if (this.state.firstName === "") {
      this.setState({
        snackbarOpen: true,
        snackbarMsg: "First Name is required",
      });
    } else if (!/^[A-Z][a-zA-Z]{2,15}$/.test(this.state.firstName)) {
      this.setState({
        snackbarOpen: true,
        snackbarMsg: "First Name is not in correct format",
      });
    } else if (this.state.lastName === "") {
      this.setState({
        snackbarOpen: true,
        snackbarMsg: "Last Name is required",
      });
    } else if (!/^[A-Z][a-zA-Z]{2,15}$/.test(this.state.lastName)) {
      this.setState({
        snackbarOpen: true,
        snackbarMsg: "Last Name is not in correct format",
      });
    } else if (this.state.email === "") {
      this.setState({
        snackbarOpen: true,
        snackbarMsg: "Email is required",
      });
    } else if (
      !/^[a-zA-Z0-9]{1,}([.]?[-]?[+]?[a-zA-Z0-9]{1,})?[@]{1}[a-zA-Z0-9]{1,}[.]{1}[a-z]{2,3}([.]?[a-z]{2})?$/.test(
        this.state.email
      )
    ) {
      this.setState({
        snackbarOpen: true,
        snackbarMsg: "Invalid Email address",
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
        snackbarMsg:
          "Password should be minimum 8 digit and have to use atleast one characters and number",
      });
    }
  };


  render() {
    return (
   <div>
    <div className="registerLogo">
    <Container maxWidth="xl">
            <Logo/>
     </Container>
    </div>
    <div className="register">
      <Card className="registerCard" variant="outlined">
        <br/>
        <span className="createAccount">Create account</span>
        <br/>
        <br/>
        <div className="registerform">
        <TextField
                className="name"
                variant="outlined"
                name="firstName"
                id="firstName"
                label={<div class="inputfont">First Name</div>}
              />
              <br/>
              <TextField
                className="name"
                variant="outlined"
                name="lastName"
                id="lastName"
                label={<div class="inputfont">Last Name</div>}
              />
              <br/>
              <TextField
              className="name"
              name="email"
              variant="outlined"
              id="outlined-required"
              label={<div class="inputfont">Email</div>}
            />
            <br/>
            <TextField
                className="name"
                name="password"
                id="outlined-adornment-password"
                type={this.state.showPassword ? "text" : "password"}
                variant="outlined"
                label={<div class="inputfont">Password</div>}
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
            <br/>
            <Button
                className="submitbutton"
                variant="contained"
                color="primary"
                onClick={this.Register}
              >
                Submit
              </Button>
              <br/>
              <div className="accountExsists">
                <span className="text" >
              Already have an account? 
            </span>
            <Button
                className="signInstead"
                color="primary"
                onClick={() => this.props.history.push("/login")}
              >
                Sign in instead
              </Button>
              </div>
            </div>
      </Card>
    </div>
    </div>
    );
  }
}
export default Register;