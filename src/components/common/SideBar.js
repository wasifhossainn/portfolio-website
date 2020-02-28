import React from 'react';
import { Link } from 'react-scroll';
import { useSpring, animated } from 'react-spring';

const SideBar = () => {
	const fade = useSpring({
		from: { opacity: 0, paddingTop: '-1000px' },
		to: { opacity: 1, paddingTop: '0px' }
	});
	return (
		<animated.div style={fade}>
			<ul className="sidebar">
				<li>
					<Link activeClass="active" to="Home" spy={true} smooth={true} offset={70} duration={500}>
						Home
					</Link>
				</li>

				<li>
					<Link activeClass="active" to="About" spy={true} smooth={true} offset={50} duration={500}>
						About
					</Link>
				</li>

				<li>
					<Link activeClass="active" to="Project" spy={true} smooth={true} offset={0} duration={500}>
						Projects
					</Link>
				</li>

				<li>
					<Link activeClass="active" to="Skills" spy={true} smooth={true} offset={250} duration={500}>
						Skills
					</Link>
				</li>
			</ul>
		</animated.div>
	);
};

export default SideBar;