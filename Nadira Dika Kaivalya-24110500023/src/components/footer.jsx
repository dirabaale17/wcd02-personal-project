import React from "react";
import profile from "../assets/profile.jpg";
import Button from "./button";

const Footer = ({ isShow }) => {
  return (
    <footer className="footer">
      {isShow && (
        <section className="footer-top">
          <div>
            <h1>Have something in mind?</h1>
            <h1>
              <img src={profile} alt="profile" className="footer-profile-img"/>
              let’s build it together.
            </h1>
          </div>
          <div>
            <Button type="light" title="Get in touch" path="/contact" />
          </div>
        </section>
      )}
      <section className="footer-bottom">
        <div>
          <p>Build with love by Nadira Dika </p>
        </div>
        <div>
          <p>
             <a href="https://www.linkedin.com/in/nadiradikakaivalya/" target="_blank" rel="noopener noreferrer">
              Linkedin
            </a>
          </p>
          <p>
            <a href="https://github.com/dirabaale17/" target="_blank" rel="noopener noreferrer">
              Github
            </a>
          </p>
          <p>
            <a href="https://www.instagram.com/nadiradkvlya" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
