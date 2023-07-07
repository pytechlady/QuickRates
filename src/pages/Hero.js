import React from "react";
import Column2 from "../components/Column2";
import HeroImg from "../assets/img/hero_img.png";
import "./pages.css";
import "./Rates.js";

const Hero = () => {

  return (
    <div className="thebody all-section">
      <div className="container text-center">
        <div className="row mx-lg-n5">
          <div className="col-sm col-md-12 col-lg-6 py-3 px-lg-5 pt-5 ft-col">
            <Column2
              content={
                <>
                  <h1>
                    Connecting the World{" "}
                    <span className="title-span">
                      to <br />
                      Cryptocurrency
                    </span>
                  </h1>
                  <div className="ft-col-container">
                    <p className="word-text">
                      Our intuitive interface and comprehensive data ensure you
                      have the insights you need to make informed decisions.
                      From Bitcoin to Ethereum, Litecoin to Ripple, track the
                      rates of popular cryptocurrencies effortlessly. With
                      QuickRates, you'll never miss a beat in the dynamic world
                      of crypto.
                    </p>
                  </div>
                  <button type="button" className="btn thebutton">
                    VIEW RATES
                  </button>
                </>
              }
            />
          </div>
          <div className="col-sm col-md-12 col-lg-6 py-3 px-lg-5 px-md-5 px-sm-5 pt-5">
            <Column2
              content={
                <div>
                  <img
                    className="theimage w-100"
                    src={HeroImg}
                    alt="heroImage"
                  />
                </div>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
