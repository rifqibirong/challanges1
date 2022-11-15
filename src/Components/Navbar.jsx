import React from "react";
import PicNavbar from "../assets/logo.svg";
import "./Navbar.css";

const Layout = () => {
  return (
    <>
      <div className="navbar">
        <div>
          <img className="logo" src={PicNavbar}></img>
        </div>
        <div className="list-navbar">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">New</a>
            </li>
            <li>
              <a href="#">Popular</a>
            </li>
            <li>
              <a href="#">Trending</a>
            </li>
            <li>
              <a href="#">Categories</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Layout;
