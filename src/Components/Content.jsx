import React from "react";
import "./Content.css";
import mainImg from "../assets/desktop.jpg";

const Content = () => {
  return (
    <div className="wrapper">
      <div className="wrapper-main-img">
        <img className="main-img" src={mainImg} />
        <div className="wrapper-sub-img">
          <div>
            <h1>The Bright Future of Web 3.0?</h1>
          </div>
          <div>
            <p>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <div className="button">
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper-text">
        <div className="text">
          <h2>New</h2>
          <h3>Hydrogen VS Electric Cars</h3>
          <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
          <div className="horizontal"></div>
          <h3 className="h3-2">The Downsides of AI Artistry</h3>
          <p>
            What are the possible adverse effects of on-demand AI image
            generation
          </p>
          <div className="horizontal"></div>
          <h3>Is VC Funding Drying Up</h3>
          <p>
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
