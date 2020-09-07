import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Badge from "@material-ui/core/Badge";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = ({ cartItems }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Steward
          </Typography>

          <div>
            <NavLink
              to={{
                pathname: "/cart",
                cart: {
                  cartItems,
                },
              }}
            >
              <IconButton color="inherit">
                <Badge badgeContent={cartItems.length} color="primary">
                  <ShoppingCartOutlinedIcon />
                </Badge>
              </IconButton>
            </NavLink>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
