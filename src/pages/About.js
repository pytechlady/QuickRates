import React from "react";
import Column2 from "../components/Column2";
import SubSection from "../assets/img/subsection_img.png";
import "./pages.css";
import CountUp from "react-countup";

const About = () => {
  return (
    <div className="pt-5 mt-5 all-section">
      <div className="container-fluid">
        <div className="row mx-lg-n5">
          <div className="col-sm col-md-12 col-lg-6 py-3 px-lg-5">
            <Column2
              content={
                <div>
                  <img
                    className="theimage w-100"
                    src={SubSection}
                    alt="subsectionImg"
                  />
                </div>
              }
            />
          </div>
          <div className="col-sm col-md-12 col-lg-6 py-3 px-lg-5 px-md-5 px-sm-5 pt-5">
            <Column2
              content={
                <>
                  <h1>
                    The Prices{" "}
                    <span className="title-span">You Can Count On</span>
                  </h1>
                  <p className="word-text">
                    Discover real-time cryptocurrency rates at your fingertips.
                    Stay ahead of the market with QuickRates, your go-to
                    platform for checking the latest exchange rates of
                    cryptocurrencies. Whether you're an investor, trader, or
                    simply curious about the ever-changing crypto landscape, we
                    provide up-to-date and accurate information on various
                    digital currencies.
                  </p>
                  <center>
                    <div className="row counter-div">
                      <div className="col-sm">
                        <Column2
                          content={
                            <>
                              <CountUp className="count-value" end={96} />{" "}
                              <span className="count-value">M+</span>
                              <h1 className="counts">Wallet</h1>
                            </>
                          }
                        />
                      </div>
                      <div className="col-sm">
                        <Column2
                          content={
                            <>
                              <span className="count-value">$</span>
                              <CountUp className="count-value" end={300} />{" "}
                              <span className="count-value">B+</span>
                              <h1 className="counts">Deals</h1>
                            </>
                          }
                        />
                      </div>
                      <div className="col-sm">
                        <Column2
                          content={
                            <>
                              <CountUp className="count-value" end={150} />
                              <h1 className="counts">Nations</h1>
                            </>
                          }
                        />
                      </div>
                    </div>
                  </center>
                </>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
