import React from "react";
import { Github_LINK, Linkedin_LINK } from "../../Utils/constants";
import "./footer.scss"

const Footer = () => (
  <div className="footer">
    <h3>Copyright © 2024. All rights are reserved</h3>
    <div className="social-menu">
      <a href={Linkedin_LINK} target="blank" className="linkdin" >
        <i className="fab fa-linkedin-in"></i>
      </a>
      <a href={Github_LINK} target="blank" className="github">
        <i className="fab fa-github"></i>
      </a>
    </div>
  </div>
);

export default Footer;
