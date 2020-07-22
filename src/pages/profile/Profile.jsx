import React from "react";
import "./Profile.scss";
import Card from "@material-ui/core/Card";
import Header from "./../../component/header/Header";
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
                <div className="name">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYF1Mjct6rfyPLrWjrjm8dAw9oZGyf-BNtaQ&usqp=CAU" alt="avtar" Width="100px" height="100px"/>
                </div>
                <div className="name"> 
                    {localStorage.getItem("FirstName") +
                      " " +
                      localStorage.getItem("LastName") }
                </div>
            </div>
            <br />
            <br />
            <div className="profiledetails">
            <div className="profileName">
                <div className="name">
                    First Name
                </div>
                <br/>
                <div className="name">
                    Last Name
                </div>
                <br/>
                <div className="name">
                    Email
                </div>
                <br/>
                <div className="name">
                     Address
                </div>
                <br/>
                <div className="name">
                     City
                </div>
                <br/>
               <div className="name">
                     Phone Number
                </div>
            </div>
            <div className="profileName">
                <div className="name">
                    {localStorage.getItem("FirstName")}
                </div>
                <br/>
                <div className="name">
                    {localStorage.getItem("LastName")}
                </div>
                <br/>
                <div className="name">
                    {localStorage.getItem("Email")}
                </div>
                <br/>
                <div className="name">
                     {localStorage.getItem("Address")}
                </div>
                <br/>
                <div className="name">
                     {localStorage.getItem("City")}
                </div>
                <br/>
                <div className="name">
                     {localStorage.getItem("Phone Number")}
                </div>
            </div>
            </div>
          </Card>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}
export default Profile;