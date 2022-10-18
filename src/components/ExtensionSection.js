import React from "react";
import "../styles/ExtensionSection.scss";
import { ReactComponent as Chrome } from "../assets/chrome.svg";
import { ReactComponent as Apple } from "../assets/apple.svg";
import { RiStarSFill } from "react-icons/ri";

const ExtensionSection = () => {
  return (
    <section className="extension-section">
      <div className="container">
        <div className="main-extension">
          <div className="stores">
            <div className="chrome-available store">
              <div className="store-icon">
                <Chrome />
              </div>
              <div className="store-text">
                <h5>available in the</h5>
                <h2>chrome web store</h2>
              </div>
            </div>
            <div className="apple-available store">
              <div className="store-icon">
                <Apple />
              </div>
              <div className="store-text">
                <h5>available in the</h5>
                <h2>apple app store</h2>
              </div>
            </div>
          </div>
          <div className="reviews">
            <div className="stars">
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
            </div>
            <div className="chrom-title">
              <h4>Chrome Store reviews</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtensionSection;
