import React from "react";
import "./Profile.scss";
import Card from "@material-ui/core/Card";
import Header from "./../../component/header/Header";
import Divider from "@material-ui/core/Divider";
import Footer from "./../../component/Footer/Footer";
import Container from "@material-ui/core/Container";

export class Profile extends React.Component {

    render() {
    return (
      <div className="profilePage">
        <div className="profileLogo">
          <Container maxWidth="xl">
            <Header variant="rich" />
          </Container>
        </div>
        <div className="profile">
          <Card className="profileCard" variant="outlined">
            <div className="profileImage">
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYF1Mjct6rfyPLrWjrjm8dAw9oZGyf-BNtaQ&usqp=CAU" alt="avtar" Width="100px" height="100px"/>
                </div>
                <div>
                    {localStorage.getItem("FirstName") +
                      " " +
                      localStorage.getItem("LastName") }
                </div>
            </div>
            <br/>
            <Divider variant="middle" />
            <div className="profileImage">
                <div>
                    First Name
                </div>
                <div>
                    {localStorage.getItem("FirstName")}
                </div>
            </div>
            <br/>
            <Divider variant="middle" />
            <div className="profileImage">
                <div>
                    Last Name
                </div>
                <div>
                    {localStorage.getItem("LastName")}
                </div>
            </div>
            <br/>
            <Divider variant="middle" />
            <div className="profileImage">
                <div>
                    Email
                </div>
                <div>
                    {localStorage.getItem("Email")}
                </div>
            </div>
            <br/>
            <Divider variant="middle" />
            <div className="profileImage">
                <div>
                     Address
                </div>
                <div>
                    {localStorage.getItem("Address")}
                </div>
            </div>
            <br/>
            <Divider variant="middle" />
            <div className="profileImage">
                <div>
                     City
                </div>
                <div>
                    {localStorage.getItem("City")}
                </div>
            </div>
            <br/>
            <Divider variant="middle" />
            <div className="profileImage">
                <div>
                     Phone Number
                </div>
                <div>
                   {localStorage.getItem("Phone Number")}
                </div>
            </div>
          </Card>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}
export default Profile;