import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  Container,
  IconButton,
  InputBase,
  Typography,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import bookstoreLogo from "./../../assets/logo.svg";

/*
  Two variants - simple & rich
  *** PROPS ***
  variant="simple"  // gives app bar only with Logo and brand name
  variant="rich"    // gives app bar with logo, brand name, searchBar, account and cart icon
  onProfileClick    // pass your onClick handler for account here
  onCartClick       // pass your onClick handler for cart here
  onLogoutClick     // pass your onClick handler for logout here
*/

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null,
      mobileMoreAnchorEl: null,
    };
  }

  search = (event) => {
    this.setState(
      {
        search: event.target.value,
      },
      () => console.log(this.state.search)
    );
  };

  handleProfileMenuOpen = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMobileMenuOpen = (event) => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null }, this.handleMobileMenuClose());
  };

  profile = () => {
    this.props.onProfileClick();
  };

  logout = () => {
    this.props.onLogoutClick();
  };

  cart = () => {
    this.props.onCartClick();
  };

  menuId = "primary-search-account-menu";

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <div className={classes.grow}>
          <AppBar position="fixed" className={classes.appbar}>
            <Container maxWidth="lg">
              <Toolbar>
                <IconButton className="bookstoreLogo">
                  <img
                    src={bookstoreLogo}
                    className="bookstoreLogo-icon"
                    alt="bookstoreLogo"
                  />
                </IconButton>
                <Typography className={classes.title} variant="h6" noWrap>
                  Bookstore
                </Typography>
                {this.props.variant === "rich" ? (
                  <React.Fragment>
                    <div className={classes.search}>
                      <div className={classes.searchIcon}>
                        <SearchIcon />
                      </div>
                      <InputBase
                        placeholder="Search…"
                        classes={{
                          root: classes.inputRoot,
                          input: classes.inputInput,
                        }}
                        inputProps={{ "aria-label": "search" }}
                        onChange={(event) => this.search(event)}
                      />
                    </div>
                    <div className={classes.grow} />

                    <IconButton
                      aria-label="show 17 new notifications"
                      color="inherit"
                    >
                      <Badge badgeContent={17} color="secondary">
                        <ShoppingCartOutlinedIcon />
                      </Badge>
                    </IconButton>

                    <IconButton
                      edge="end"
                      aria-label="account of current user"
                      aria-controls={this.menuId}
                      aria-haspopup="true"
                      onClick={this.handleProfileMenuOpen}
                      color="inherit"
                    >
                      <AccountCircle />
                    </IconButton>
                    {/* <IconButton
                      aria-label="show 17 new notifications"
                      color="inherit"
                    >
                      <Badge badgeContent={17} color="secondary">
                        <ShoppingCartOutlinedIcon />
                      </Badge>
                    </IconButton> */}
                    <Menu
                      id="simple-menu"
                      anchorEl={this.state.anchorEl}
                      // keepMounted
                      open={Boolean(this.state.anchorEl)}
                      onClose={() => this.handleMenuClose()}
                      className={classes.userAccountMenu}
                    >
                      <MenuItem
                        onClick={() => this.profile()}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <label htmlFor="contained-button-file">Profile</label>
                      </MenuItem>

                      <MenuItem
                        onClick={() => this.logout()}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {" "}
                        <label htmlFor="contained-button-file">Logout</label>
                      </MenuItem>
                    </Menu>
                  </React.Fragment>
                ) : null}
              </Toolbar>
            </Container>
          </AppBar>
        </div>
      </React.Fragment>
    );
  }
}

const useStyles = (theme) => ({
  appbar: {
    backgroundColor: "#a03037",
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    fontFamily: "'Lato', sans-serif",

    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#fff",
    "&:hover": {
      backgroundColor: "#fff",
    },
    color: "#000",
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    color: "#9d9d9d",
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("lg")]: {
      width: "60ch",
    },
    fontFamily: "'Lato', sans-serif",
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  accountMenu: {
    position: "absolute",
    display: "inline-flex",
    width: "100px",
    top: 70,
    right: 30,
    padding: "10px 0px 0px 0px",
    backgroundColor: "green",
  },
  accountMenuItem: {
    textAlign: "center",
    padding: "0px 0px 10px 0px",
    display: "inline",
    color: "black",

    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.4)",
    },
  },
});

export default withStyles(useStyles)(Header);
