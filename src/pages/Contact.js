import React from "react";
import Column2 from "../components/Column2";
import "./pages.css";
import Tel from "../assets/img/tel_image.png";
import Email from "../assets/img/email_img.png";
import Location from "../assets/img/location_img.png";

const Contact = () => {
  return (
      <div className="container pt-5 pb-4 all-section">
        <center>
        <h2 className="faq-title">
          Get in touch <span className="title-span">with us!</span>
        </h2>
        </center>
        <div className="Container p4">
          <div className="row">
            <div className="col-sm">
              <Column2
                content={
                  <>
                  <center>
                    <img className="theimage w-10" src={Tel} alt="telImg" />
                    <p>Contact Phone Number</p>
                    <p>+44(0)701-000-000-0001</p>
                    <p>Monday - Friday (9:00 AM - 5:00 PM)</p>
                    </center>
                  </>
                }
              />
            </div>
            <div className="col-sm">
              <Column2
                content={
                  <>
                  <center>
                    <img className="theimage w-10" src={Email} alt="EmailImg" />
                    <p>Our Email Address</p>
                    <p>test@quickrate.com</p>
                    <p>sample@quickrate.com</p>
                    </center>
                  </>
                }
              />
            </div>
            <div className="col-sm">
              <Column2
                content={
                  <>
                  <center>
                    <img className="theimage w-10" src={Location} alt="LocationImg" />
                    <p>Our Address</p>
                    <p>Somewhere on earth</p>
                    <p>Not in mars</p>
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

export default Contact;
