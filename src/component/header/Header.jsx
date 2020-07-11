import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  Container,
  IconButton,
  InputBase,
  Typography,
} from "@material-ui/core";
import Logo from "../logo/Logo";
import { fade, withStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import bookstoreLogo from "./../../assets/logo.svg";

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
});

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null,
      mobileMoreAnchorEl: null,
    };
  }
  search=(event)=>{
    this.setState({
      search: event.target.value,
    },()=>console.log(this.state.search));
    
  }
  handleProfileMenuOpen = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };
  handleMobileMenuOpen = (event) => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
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
                  <img src={bookstoreLogo} className="bookstoreLogo-icon" />
                </IconButton>
                <Typography className={classes.title} variant="h6" noWrap>
                  Bookstore
                </Typography>
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
                    onChange={event=>this.search(event)}
                  />
                </div>
                <div className={classes.grow} />

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
                <IconButton
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <Badge badgeContent={17} color="secondary">
                    <ShoppingCartOutlinedIcon />
                  </Badge>
                </IconButton>

                {/* {renderMobileMenu}
              {renderMenu} */}
              </Toolbar>
            </Container>
          </AppBar>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(useStyles)(Header);
