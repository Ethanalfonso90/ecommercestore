import { Fragment, useState } from "react";
// import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
// import { UserContext } from "../../context/user.context";
// import { signOutUser } from "../../util/firebase/firebase.js";
// import CartIcon from "../cart/cart.icon";
// import { CartContext } from "../../context/cart.context";

// material ui imports
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import {
  Avatar,
  Box,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
  Button,
  TextField,
} from "@mui/material";
// import NavigationBar from "./Appbar";

const pages = [
  { name: "Shop", link: "/shop" },
  { name: "Sign In", link: "/signin" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navigation = () => {
  // const { currentUser } = useContext(UserContext);
  // const { cartItems } = useContext(CartContext);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [value, setValue] = useState("");

  const handleSearchChange = (event) => {
    setValue(event.currentTarget.value);
  };

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setAnchorElNav(anchorElNav);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // const signOutHandler = async () => {
  //   await signOutUser();
  // };

  return (
    <Fragment>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <IconButton
              disableRipple
              sx={{ p: 0, mr: 2 }}
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <Link className="item" to="/">
                <CrwnLogo />
              </Link>
            </IconButton>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                flexDirection: "row-reverse",
              }}
            >
              {pages.map((page) => (
                <Button
                  LinkComponent={Link}
                  to={page.link}
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                  }}
                >
                  {page.name}
                </Button>
              ))}
              <TextField
                sx={{ padding: "10px" }}
                value={value}
                placeholder="search"
                onChange={handleSearchChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>

              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

// <div className="ui secondary menu">
// <Link className="item" to="/">
//   <CrwnLogo />
// </Link>
// <div className="right menu">
//   <Link className="item ui button" to="/shop">
//     Shop
//   </Link>
//   {currentUser ? (
//     <span className="item ui button" onClick={signOutHandler}>
//       Sign Out
//     </span>
//   ) : (
//     <Link className="item ui button" to="/signin">
//       Sign In
//     </Link>
//   )}
//   <CartIcon cartItems={cartItems} />
// </div>
// </div>
// <Outlet />
