import React, { useState } from "react";
import "../styles/RewardSection.scss";
import { ReactComponent as Success } from "../assets/success.svg";
import { ReactComponent as Invite } from "../assets/invite.svg";
import { ReactComponent as Voucher } from "../assets/voucher.svg";
import { ReactComponent as Collect } from "../assets/collect-coins.svg";
import { ReactComponent as Email } from "../assets/email.svg";

const RewardSection = () => {
  //Jsonbin
  let req = new XMLHttpRequest();

  req.onreadystatechange = () => {
    if (req.readyState === XMLHttpRequest.DONE) {
      console.log(req.responseText);
    }
  };

  //Email
  const [emailInput, setEmailInput] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(true);
  const regEx = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  const emailValidation = (e) => {
    e.preventDefault();
    if (emailInput.match(regEx)) {
      setMessage("Your email is confirmed!");
      setError(false);
      const email_json = `{"email": "${emailInput}"}`;

      req.open(
        "PUT",
        "https://api.jsonbin.io/v3/b/634da80f2b3499323be1e2b9",
        true
      );
      req.setRequestHeader("Content-Type", "application/json");
      req.setRequestHeader(
        "X-Master-Key",
        "$2b$10$GKFIZKzHmxNNfSTojmGrZOi8onYJGD4m4enQsOE.8Ut2KiqMHkqBW"
      );
      req.send(email_json.toString());
      setEmailInput("https://ratepunk.com/referral");
    } else if (emailInput === "") {
      setMessage("Your email is empty!");
      setError(true);
    } else {
      setMessage("Your email is not valid!");
      setError(true);
    }
  };
  const handleOnChange = (e) => {
    setEmailInput(e.target.value);
  };

  const handleCopy = (e) => {
    navigator.clipboard.writeText(emailInput);
  };

  return (
    <section className="reward-section">
      <div className="container">
        <div className="main-reward">
          <div className="left-col columns">
            <div className="email-block">
              <h1 className="title">REFER FRIENDS AND GET REWARDS</h1>
              <p className="paragraph">
                Refer your friends to us and earn hotel booking vouchers. We'll
                give you 1 coin for each friend that installs our extension.
                Minimum cash-out at 20 coins.
              </p>
              <div
                className={
                  error ? "error-massage iserror" : "error-massage success"
                }
              >
                <div id="icon">
                  <Success />
                </div>
                <span id="error">{message}</span>
              </div>
              <div className="email-input">
                <form className={error ? null : "copy-form"}>
                  <div className={error ? "email-icon" : "button-hide"}>
                    <Email />
                  </div>

                  <input
                    type={error ? "email" : "text"}
                    placeholder="Enter your email address"
                    value={emailInput}
                    onChange={handleOnChange}
                  />
                  <button
                    className={error ? "button-hide" : null}
                    onClick={handleCopy}
                  >
                    Copy
                  </button>
                </form>
                <button
                  className={error ? "get-link" : "button-hide"}
                  onClick={emailValidation}
                >
                  Get Referral Link
                </button>
              </div>
              <div className="email-footer">
                <span>Limits on max reqrds apply</span>
              </div>
            </div>
          </div>
          <div className="right-col columns">
            <div className="first-step step-grid">
              <div className="grid-one icons">
                <Invite />
              </div>
              <div className="grid-two texts">
                <h3>Step 1</h3>
                <h1>Invite Friends</h1>
                <p>Refer friends with your unique referral link.</p>
              </div>
            </div>
            <div className="second-step step-grid">
              <div className="grid-one texts">
                <h3>Step 2</h3>
                <h1>Collect Coins</h1>
                <p>
                  Get 1 coin for each friend that installs our extension using
                  your referral link.
                </p>
              </div>
              <div className="grid-two icons">
                <Collect />
              </div>
            </div>
            <div className="third-step step-grid">
              <div className="grid-one icons">
                <Voucher />
              </div>
              <div className="grid-two texts">
                <h3>Step 3</h3>
                <h1>Get Voucher</h1>
                <p>
                  Redeem for a $20 hotel booking voucher once you collect 20
                  coins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RewardSection;
