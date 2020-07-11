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
                onClick={this.submitUserSignInForm}
              >
                Submit
              </Button>
              <br/>
              <div className="accountExsists">
                <span >
              Already have an account? 
            </span>
            <Button
                className="signInstead"
                color="primary"
                style={{
                  width: "150px",
                  padding: "7px 0px",
                  color: "#0423ce",
                  fontSize: "13px",
                }}
                onClick={() => this.props.history.push("/")}
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