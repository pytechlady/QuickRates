import React from "react";
import "./pages.css";

const Faq = () => {
  return (
    <div className="container-fluid pt-5 mt-5 all-section">
        <center>
        <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="container-fluid p-4 accord">
        <div
          className="accordion accordion-flush faq-bg"
          id="accordionFlushExample"
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                What is QuickRates?
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse faq-item-bg"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                QuickRates is a cryptocurrency exchange platform that allows
                users to buy and sell cryptocurrencies with ease.
              </div>
            </div>
          </div>
        </div>
        <div
          className="accordion accordion-flush faq-bg"
          id="accordionFlushExample"
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                What does non-exclusive mean
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse faq-item-bg"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Non-exclusive means that your application will be sent to
                multiple lenders. This is the best way to get the best rate.
              </div>
            </div>
          </div>
        </div>
        <div
          className="accordion accordion-flush faq-bg"
          id="accordionFlushExample"
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                How often do the prices change?
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse faq-item-bg"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                We cannot guarantee that the prices will not change. We do our
                best to keep the prices up to date.
              </div>
            </div>
          </div>
        </div>
        <div
          className="accordion accordion-flush faq-bg"
          id="accordionFlushExample"
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFour"
                aria-expanded="false"
                aria-controls="flush-collapseFour"
              >
                How often are the prices here updated?
              </button>
            </h2>
            <div
              id="flush-collapseFour"
              className="accordion-collapse collapse faq-item-bg"
              aria-labelledby="flush-headingFour"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                We update the prices as soon as there is a change.
              </div>
            </div>
          </div>
        </div>
        <div
          className="accordion accordion-flush faq-bg"
          id="accordionFlushExample"
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingFive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFive"
                aria-expanded="false"
                aria-controls="flush-collapseFive"
              >
                What is cryptocurrency?
              </button>
            </h2>
            <div
              id="flush-collapseFive"
              className="accordion-collapse collapse faq-item-bg"
              aria-labelledby="flush-headingFive"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Cryptocurrency is a digital currency that is secured by
                cryptography. It is not backed by any government.
              </div>
            </div>
          </div>
        </div>
      </div>
      </center>
    </div>
  );
};

export default Faq;
