import React from 'react';
import Slider from './SimpleSlider';

import Monitor from '../../assets/Monitor.svg';
import CodingBoy from '../../assets/StudentWorkingComp.svg';
import Divider from '../../assets/Divider2.svg';

import './style.scss';

const Projects = () => {
	return (
		<React.Fragment>
			<img alt="" className="codingboy" src={CodingBoy} />
			<img alt="" className="divider" src={Divider} />

			<img alt="" className="monitor" src={Monitor} />

			<div className="projects-content" id="Project">
				<h1 className="projectHeading">PROJECTS</h1>

				<div className="slider-scale">
					<Slider />
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
