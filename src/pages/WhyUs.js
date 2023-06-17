import React from "react";
import Column2 from "../components/Column2";
import SubSection2 from "../assets/img/subsection2_img.png";
import "./pages.css";

const WhyUs = () => {
  return (
    <div className="pt-5 mt-5 all-section">
      <div className="container">
        <div className="row mx-lg-n5">
          <div className="col-sm col-md-12 col-lg-6 py-3 px-lg-5 thewhy">
            <Column2
              content={
                <>
                  <h1>
                    Why Choose <span className="title-span">QuickRate?</span>
                  </h1>

                  <p className="word-text">
                    - At QuickRates, we possess extensive knowledge and expertise
                    in the field of cryptocurrency exchange rates. <br/> <br/>- We
                    understand the importance of up-to-the-minute information in
                    the fast-paced world of cryptocurrencies. <br/><br/>- QuickRates
                    offers a comprehensive coverage of various cryptocurrencies,
                    ensuring that you can track the rates of all the major
                    digital currencies in one place. <br/><br/>- We prioritize trust and reliability in everything we do.
                  </p>
                </>
              }
            />
          </div>
          <div className="col-sm col-md-12 col-lg-6 py-3 px-lg-5 px-md-5 px-sm-5 pt-5">
            <img
              className="theimage whyus w-100"
              src={SubSection2}
              alt="subsection2Img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
