import React from 'react';

import Divider from '../../assets/Divider1.svg';
import Boy from '../../assets/TechBoy.svg';
import ChatBubble from '../../assets/ChatBubble.svg';
import LinkedIn from '../../assets/LinkedInIcon.svg';
import Email from '../../assets/EmailIcon.svg';
import Github from '../../assets/GitIcon.svg';
import Resume from '../../assets/ResumeIcon.svg';

import PDF from '../../assets/Wasif_Hossain_Resume.pdf';

import './style.scss';

const About = () => {
	return (
		<React.Fragment>
			<img alt="" className="techboy" src={Boy} />
			<img alt="" className="divider" src={Divider} />
			<img alt="" className="chatbubble" src={ChatBubble} />

			<div className="content" id="About">
				<h1 className="aboutHeading">ABOUT ME</h1>

				<p className="about-section-1">
					Hi, my name is Wasif Hossain and I am currently studying
					<br />
					Software Engineering at University of Technology Sydney.
				</p>
				<p className="about-section-2">
					I'm a passionate and a hardworking individual who has had experience working as a full-time front-end
					developer at Stomble.
					<br />
					This involved me to develop skills of web development as I used ReactJS Framework to create a video platform.
				</p>

				<p className="about-section-3">
					In the future, I believe that software engineering gives me the opportunity and provides me exposure to tools
					and skills
					<br /> which can be implemented in real-world problems to produce premium quality applications and solutions.
					These solutions can
					<br /> solve problems in an innovative way and enhance interactions that are made between the user and their
					devices.
				</p>

				<h1 className="socialHeading">SOCIAL LINKS</h1>

				<a rel="noopener noreferrer" alt="" target="_blank" href="https://github.com/wasifhossainn">
					<img alt="" className="github" src={Github} />
				</a>
				<a alt="" rel="noopener noreferrer" target="_blank" href="https://au.linkedin.com/in/wasif-hossain-b4398115a">
					<img alt="" className="linkedin" src={LinkedIn} />
				</a>

				<a alt="" rel="noopener noreferrer" target="_blank" href="mailto:wasif.hossain@hotmail.com">
					<img alt="" className="email" src={Email} />
				</a>

				<a alt="" rel="noopener noreferrer" target="_blank" href={PDF}>
					<img alt="" className="resume" src={Resume} />
				</a>

				<div className="container-txt">
					{' '}
					<p className="github-txt">Github</p>
					<p className="linkedin-txt">LinkedIn</p>
					<p className="email-txt">Email</p>
					<p className="resume-txt">Resume</p>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
