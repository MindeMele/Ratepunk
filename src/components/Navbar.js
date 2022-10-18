import React from "react";
import { ReactComponent as Bars } from "../assets/menu.svg";
import { ReactComponent as Close } from "../assets/close.svg";
import { ReactComponent as Logo } from "../assets/logo.svg";
import "../styles/Navbar.scss";

const Navbar = (props) => {
  const handleClick = (e) => {
    props.onClick(e.target.click);
  };

  return (
    <div className="container">
      <header>
        <Logo />
        <nav className={props.click ? "nav-menu" : "nav-menu active"}>
          <a href="https://www.ratepunk.com/">Chrome Extension</a>
          <a href="https://www.ratepunk.com/comparison">Price Comparison</a>
          <a href="https://www.ratepunk.com/blog">Blog</a>
        </nav>
        <button className="nav-btn" onClick={handleClick}>
          {props.click ? <Bars /> : <Close />}
        </button>
      </header>
    </div>
  );
};

export default Navbar;
