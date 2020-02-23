import React from 'react';

import Team from '../../assets/Team.svg';
import Divider from '../../assets/Divider2.svg';

import { CircularProgressbar } from 'react-circular-progressbar';
import './style.scss';

const Skills = () => {
	const HTMLPercent = 80;
	const CSSPercent = 70;
	const ReactJSPercent = 80;
	const JavaPercent = 90;
	const PythonPercent = 80;
	const SQLPercent = 60;
	const VanillaJS = 80;
	return (
		<React.Fragment>
			<div className="skill-content" id="Skills">
				<img alt="" className="divider" src={Divider} />

				<img alt="" className="team" src={Team} />

				<h1 className="skillHeading">TECHNICAL SKILLS</h1>

				<p className="skill-section-1">
					Recently, I worked at Stomble (June 2019- January 2020) as a front-end developer in a <br /> SCRUM environment
					where we created a video platform using ReactJS, AWS APIs, <br /> Material UI and Redux Sagas. Also, used
					tools such as GitLab for pipeline testing and <br /> ensuring the application would not encounter run-time
					error and Trello for organising <br /> SCRUM product backlog. The application connects businesses and users,
					allowing users <br /> to absorb content through videos that are posted by businesses.
				</p>

				<div className="progress-bar-container">
				<CircularProgressbar className="progress-bar" value={HTMLPercent} text={'HTML5 ' + `${HTMLPercent}%`} />
					<CircularProgressbar className="progress-bar" value={CSSPercent} text={'CSS3 ' + `${CSSPercent}%`} />
					<CircularProgressbar className="progress-bar" value={ReactJSPercent} text={'React ' + `${ReactJSPercent}%`} />
					<CircularProgressbar className="progress-bar" value={JavaPercent} text={'Java ' + `${JavaPercent}%`} />
					<CircularProgressbar className="progress-bar" value={PythonPercent} text={'Python ' + `${PythonPercent}%`} />
					<CircularProgressbar className="progress-bar" value={SQLPercent} text={'SQL ' + `${SQLPercent}%`} /> 
					<CircularProgressbar className="progress-bar" value={VanillaJS} text={'Vanilla JS ' + `${VanillaJS}%`} /> 
				</div>
			</div>
		</React.Fragment>
	);
};

export default Skills;
