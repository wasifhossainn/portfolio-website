import React from 'react';
import { useSpring, animated } from 'react-spring';
import './style.scss';
import Background from '../../assets/background.svg';

const Home = () => {
	const fade = useSpring({
		from: { opacity: 0 },
		to: { opacity: 1 }
	});

	return (
		<animated.div style={fade}>
			<header className="header" id="Home">
				<div className="container">
					<h1 className="homeHeading"> Wasif Hossain</h1>
					<h1 className="homeHeading2">Wasif Hossain</h1>
					<h1 className="homeHeading3">Wasif Hossain</h1>
				</div>

				<img className="background" alt="/" src={Background} />
			</header>
		</animated.div>
	);
};

export default Home;
