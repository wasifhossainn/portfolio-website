import React from 'react';

import LinkedIn from '../../assets/LinkedInIcon.svg';
import Email from '../../assets/EmailIcon.svg';
import Github from '../../assets/GitIcon.svg';
import Resume from '../../assets/ResumeIcon.svg';

import PDF from '../../assets/Wasif_Hossain_Resume.pdf';
import Divider from '../../assets/Divider2.svg';

import './style.scss';

const Footer = () => {
	return (
		<React.Fragment>
			<div className="footer" id="Footer">
				<img alt="" className="divider" src={Divider} />

				<div className="footer-bar-container">
					<a rel="noopener noreferrer" alt="" target="_blank" href="https://github.com/wasifhossainn">
						<img className="footer-item" alt="" src={Github} />
					</a>
					<a alt="" rel="noopener noreferrer" target="_blank" href="https://au.linkedin.com/in/wasif-hossain-b4398115a">
						<img className="footer-item" alt="" src={LinkedIn} />
					</a>
					<a alt="" rel="noopener noreferrer" target="_blank" href="mailto:wasif.hossain@hotmail.com">
						<img className="footer-item" alt="" src={Email} />
					</a>
					<a alt="" rel="noopener noreferrer" target="_blank" href={PDF}>
						<img className="footer-item" alt="" src={Resume} />
					</a>
				</div>

				<div className="footer-text">
					<p>Copyright © Wasif Hossain</p>
					<p> Credit to Ameli Lin for Background Image</p>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
