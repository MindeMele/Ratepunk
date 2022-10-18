import React from "react";
import "../styles/Footer.scss";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as Email } from "../assets/email-footer.svg";
// footer button links
import { ReactComponent as Instagram } from "../assets/instagram.svg";
import { ReactComponent as Facebook } from "../assets/facebook.svg";
import { ReactComponent as Linkedin } from "../assets/linkedin.svg";
import { ReactComponent as Twitter } from "../assets/twitter.svg";
import { ReactComponent as Tiktok } from "../assets/tiktok.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="main-footer">
          <div className="footer-columns">
            <div className="info-col foot-col-rep">
              <div id="logo">
                <Logo />
              </div>
              <div className="paragraph">
                <p>
                  Ratepunk compares hotel room prices across the major online
                  travel agencies. When you search for a room, Ratepunk
                  extension scans the top booking sites and runs a price
                  comparison, so you can be confident in knowing you’re getting
                  the best deal!
                </p>
              </div>
              <div className="footer-text">
                © 2021 Ratepunk. All Rights Reserved.
              </div>
            </div>
            <div className="links-col foot-col-rep">
              <h1>Quick Links</h1>
              <ul>
                <li>
                  <a href="https://www.ratepunk.com/comparison">
                    Price Comparison
                  </a>
                </li>
                <li>
                  <a href="https://www.ratepunk.com/">Chrome Extension</a>
                </li>
                <li>
                  <a href="https://www.ratepunk.com/#how-it-works">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="https://www.ratepunk.com/blog">Ratepunk Blog</a>
                </li>
                <li>
                  <a href="https://www.ratepunk.com/privacy">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div className="contacts-col foot-col-rep">
              <div className="email-contact">
                <h1>Contact</h1>
                <div className="email-block">
                  <div id="email-icon">
                    <Email />
                  </div>
                  <span>hi@ratepunk.com</span>
                </div>
              </div>
              <div className="social-contact">
                <h1>Social</h1>
                <div className="links">
                  <button className="link">
                    <a href="https://www.instagram.com/ratepunk/">
                      <Instagram />
                    </a>
                  </button>
                  <button className="link">
                    <a href="https://www.facebook.com/r8punk/">
                      <Facebook />
                    </a>
                  </button>
                  <button className="link">
                    <a href="https://www.linkedin.com/company/ratepunk/">
                      <Linkedin />
                    </a>
                  </button>
                  <button className="link">
                    <a href="https://twitter.com/rate_punk">
                      <Twitter />
                    </a>
                  </button>
                  <button className="link">
                    <a href="https://www.tiktok.com/@ratepunk">
                      <Tiktok />
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
