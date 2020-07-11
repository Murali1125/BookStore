import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <Typography variant="h6"></Typography>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }
}
