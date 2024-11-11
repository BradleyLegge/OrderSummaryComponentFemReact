import React from "react";
import HeaderImage from "../images/illustration-hero.svg";
import MusicIcon from "../images/icon-music.svg";

const OrderSummary = () => {
  return (
    <div className="hero-container">
      <div className="top-container">
        <img className="header-image" src={HeaderImage} alt="" />
      </div>
      <div className="order-container">
        <div className="order-info">
          <h1>Order Summary</h1>
          <p>
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
        </div>
        <div className="plan-container">
          <div className="left-side-container">
            <img className="music-icon" src={MusicIcon} alt="Music note icon" />
            <div className="plan-info">
              <h2>Annual Plan</h2>
              <p>$59.99/year</p>
            </div>
          </div>
          <p>
            <a className="hyperlink" href="#">
              Change
            </a>
          </p>
        </div>
        <button className="proceed-btn">Proceed to Payment</button>
        <button className="cancel-btn">Cancel Order</button>
      </div>
    </div>
  );
};

export default OrderSummary;
