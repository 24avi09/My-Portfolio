import { Github_LINK, Linkedin_LINK, wave_img } from "../../Utils/constants";

import "./hero.scss";

const Hero = () => {
  return (
    <div id="hero" className="hero">
      <div className="left-section">
        <div className="hero-left-section-header">
          <h1>Software Engineer</h1>
          <span>
            <img src={wave_img} alt="hand-wave" />
          </span>
        </div>
        <p>Hi, I'm Abhishekh Kumar Yadav. A passionate Software Engineer based in Lucknow, India.📍 My enthusiasm lies in crafting innovative solutions that make a difference. With a strong foundation in Java, Python, and web technologies, I thrive on turning ideas into reality. Let's embark on a journey to craft remarkable innovations together!</p>
        <div className="social-links">
          <a href={Linkedin_LINK} target="blank" className="linkdin">
            <i className="fab fa-linkedin-in icon"></i>
          </a>
          <a href={Github_LINK} target="blank" className="github">
            <i className="fab fa-github icon"></i>
          </a>
        </div>
      </div>
      <div className="right-section">
        <img src="/images/profile-image.png" alt="profile" />
      </div>
    </div>
  );
};

export default Hero;
