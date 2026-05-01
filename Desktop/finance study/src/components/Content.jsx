import React from "react";
import "./Content.css";
import Button from "../assets/Content_Button.png";
import Image from "../assets/Content_Image.png";

const Content = () => {
  return (
    <div className="content">
        <div className="content-start">
            <img src={Button} alt="" />
            <h1 className="start-h1">We're creators too</h1>
            <p className="start-p">
                Occasionally, we produce one-off projects that are in pursuit of our
                mission of enabling creators to run great businesses, own their
                content, and build a direct relationship with their audience.
            </p>
            <button className="start-button">Enter Your Email</button>
        </div>
        <div className="content-images">
            <img src={Image} alt="" />
        </div>
    </div>
  );
};

export default Content;
