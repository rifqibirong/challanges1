import React from "react";
import "./Footer.css";
import img1 from "../assets/image-retro-pcs.jpg";
import img2 from "../assets/image-top-laptops.jpg";
import img3 from "../assets/image-gaming-growth.jpg";

const Footer = () => {
  return (
    <div className="wrapper-footer">
      <div className="wrap1">
        <div className="wrap-img">
          <img src={img1} />
        </div>

        <div className="wrap-text">
          <h1>01</h1>
          <h2>Reviving Retro PCs</h2>
          <p>What happens when old PCs are given modern upgrades?</p>
        </div>
      </div>

      <div className="wrap2">
        <div className="wrap-img">
          <img src={img2} />
        </div>

        <div className="wrap-text">
          <h1>02</h1>
          <h2>Top 10 Laptops of 2022</h2>
          <p>Our best picks for various needs and budgets.</p>
        </div>
      </div>

      <div className="wrap3">
        <div className="wrap-img">
          <img src={img3} />
        </div>

        <div className="wrap-text">
          <h1>03</h1>
          <h2>The Growth of Gaming</h2>
          <p>How the pandemic has sparked fresh opportunies.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
