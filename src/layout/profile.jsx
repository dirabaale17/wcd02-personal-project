import React from "react";
import linkedinlogo from "../assets/linkedinlogo.jpeg";
import instagramlogo from "../assets/instagramlogo.jpeg";
import githublogo from "../assets/githublogo.jpeg";

const Profile = () => {
  return (
    <section className="card-profile">

      <div>
        <p>Contact Details</p>
        <h1>nadiradkvlya@gmail.com</h1>
        <h1>+62 85759927959</h1>
      </div>

      <div>
        <p>Social</p>
      </div>
      <div className="name-with-social">
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/nadiradikakaivalya/" target="_blank">
            <img src={linkedinlogo} alt="LinkedIn" />
          </a>
        </div>
        <h2>LinkedIn</h2>
      </div>

           <div className="name-with-social">
        <div className="social-icons">
          <a href="https://www.instagram.com/nadiradkvlya" target="_blank">
            <img src={instagramlogo} alt="Instagram" />
          </a>
        </div>
        <h2>Instagram</h2>
      </div>

      <div className="name-with-social">
        <div className="social-icons">
          <a href="https://github.com/dirabaale17/" target="_blank">
            <img src={githublogo} alt="GitHub" />
          </a>
        </div>
        <h2>GitHub</h2>
      </div>
    </section>
  );
};

export default Profile;
