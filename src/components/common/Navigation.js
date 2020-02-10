import React from 'react';
import './style.scss';
import Logo from '../../assets/WH Logo.png';
import { Link } from 'react-scroll';

const Navigation = () => {
	return (
		<nav>
			<Link activeClass="active" to="Footer" spy={true} smooth={true} offset={-70} duration={500}>
				<img src={Logo} alt="/" className="logo" />
			</Link>
			<ul>
				<li>
					<Link activeClass="active" to="Home" spy={true} smooth={true} offset={70} duration={500}>
						<button className="homeBtn">Home</button>
					</Link>
				</li>

				<li>
					<Link activeClass="active" to="About" spy={true} smooth={true} offset={50} duration={500}>
						<button className="aboutBtn">About</button>
					</Link>
				</li>

				<li>
					<Link activeClass="active" to="Project" spy={true} smooth={true} offset={0} duration={500}>
						<button className="projectBtn">Projects</button>
					</Link>
				</li>

				<li>
					<Link activeClass="active" to="Skills" spy={true} smooth={true} offset={0} duration={500}>
						<button className="skillBtn">Skills</button>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
