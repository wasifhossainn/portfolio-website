import React from "react";

import LinkedIn from "../../assets/LinkedInIcon.svg";
import Email from "../../assets/EmailIcon.svg";
import Github from "../../assets/GitIcon.svg";
import Resume from "../../assets/ResumeIcon.svg";

import PDF from "../../assets/Wasif_Hossain_Resume.pdf";
import Divider from "../../assets/Divider2.svg";

import "./style.scss";

const Footer = () => {
  return (
    <React.Fragment>
      <img alt="" className="divider" src={Divider} />
      <div className="footer" id="Footer">
        Footer
        <div className="footer-bar-container">
          <a
            rel="noopener noreferrer"
            alt=""
            target="_blank"
            href="https://github.com/wasifhossainn"
          >
            <img alt="" className="footer-github" src={Github} />
          </a>
          <a
            alt=""
            rel="noopener noreferrer"
            target="_blank"
            href="https://au.linkedin.com/in/wasif-hossain-b4398115a"
          >
            <img alt="" className="footer-linkedin" src={LinkedIn} />
          </a>
          <a
            alt=""
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:wasif.hossain@hotmail.com"
          >
            <img alt="" className="footer-email" src={Email} />
          </a>
          <a alt="" rel="noopener noreferrer" target="_blank" href={PDF}>
            <img alt="" className="footer-file" src={Resume} />
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
