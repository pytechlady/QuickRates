import React from "react";
import Logo from "../assets/img/Logo.png";
import "./components.css";
import Hero from "../pages/Hero";
import About from "../pages/About";
import Faq from "../pages/Faq";
import WhyUs from "../pages/WhyUs";
import Contact from "../pages/Contact";

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg px-3 mb-3 fixed-top thenav">
        <div class="container-fluid">
          <a className="navbar-brand" href="#home">
            <img src={Logo} alt="logo_image" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav ms-auto">
              <ul className="nav nav-pills me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#home">
                    HOME
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    ABOUT
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#faq">
                    FAQ
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    CONTACT
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div
        data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        data-bs-root-margin="0px 0px -40%"
        data-bs-smooth-scroll="true"
        class="scrollspy-example bg-light p-3 rounded-2"
        tabindex="0"
      >
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
          <WhyUs />
        </section>
        <section id="faq">
          <Faq />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </>
  );
};

export default Nav;
