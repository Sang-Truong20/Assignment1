import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Icon } from "react-materialize";
import "../App.css";
//import { ThemeContext } from "./ThemeContext";

function Navigation() {
  //const { theme, toggle, dark } = useContext(ThemeContext);
  return (
    <Navbar
      className="menu"
      alignLinks="right"
      brand={<span className="brand-logo">Player Cards</span>}
      id="mobile-nav"
      menuIcon={<Icon>menu</Icon>}
      style={{paddingLeft: "2rem"}}
    >
      <div>
        <Link to="/">
          <Icon left>home</Icon>Home
        </Link>
      </div>
      <div to="/news">
        <Link href="#news">
          <Icon left>info_outline</Icon>News
        </Link>
      </div>
      <div to="/about">
        <Link href="/about">
          <Icon left>dvr</Icon>About
        </Link>
      </div>
      <div to="/contact">
        <Link href="/contact">
          <Icon left>contacts</Icon>Contact
        </Link>
      </div>
    </Navbar>
  );
}

export default Navigation;
