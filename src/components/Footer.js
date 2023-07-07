import React from "react";
import Logo from "../assets/img/footer_logo.png";
import Column2 from "./Column2";
import "./components.css";
import "../pages/pages.css"

const Footer = () => {
  return (
    <div className="footer pt-5 pb-2">
      <div className="container">
        <div className="row p-3">
          <div className="col-sm footer-items footer-logo-area">
            <Column2
              content={
                <>
                  <img src={Logo} alt="footerLogo" />
                  <p className="mt-3 word-text">
                    Experience the convenience of accessing current rates
                    instantly, allowing you to seize opportunities and navigate
                    the crypto market with confidence.
                  </p>
                </>
              }
            />
          </div>
          <div className="col-sm footer-items">
            <Column2
              content={
                <center>
                  <h3>COMMUNITY</h3>
                  <p>Telegram</p>
                  <p>Slack</p>
                </center>
              }
            />
          </div>
          <div className="col-sm footer-items">
            <Column2
              content={
                <center>
                  <h3>CONTACT INFO</h3>
                  <p>Somewhere on earth</p>
                  <p>+44(0)701-000-000-0001</p>
                  <p>test@quickrate.com</p>
                </center>
              }
            />
          </div>
        </div>
        <hr className="footer-hr"/>
        <center className="p-2">
          <h4 className="copyright">Copyright &copy; 2023 QuickRate</h4>
        </center>
      </div>
    </div>
  );
};

export default Footer;
