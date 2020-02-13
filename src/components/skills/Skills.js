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
	return (
		<React.Fragment>
			<img alt="" className="divider" src={Divider} />

			<img alt="" className="team" src={Team} />

			<div className="skill-content" id="Skills">
				<h1 className="skillHeading">TECHNICAL SKILLS</h1>

				<p className="skill-section-1">
					Recently, I worked at Stomble (June 2019- January 2020) as a front-end developer in a <br /> SCRUM environment{' '}
					where we created a video platform using ReactJS, AWS APIs, <br /> Material UI and Redux Sagas. Also, used
					tools such as GitLab for pipeline testing and <br /> ensuring the application would not encounter run-time
					error and Trello for organising <br /> SCRUM product backlog. The application connects businesses and users,
					allowing users <br /> to absorb content through videos that are posted by businesses.
				</p>

				<CircularProgressbar className="progress-bar" value={HTMLPercent} text={`${HTMLPercent}%`} />

				<CircularProgressbar className="progress-bar" value={CSSPercent} text={`${CSSPercent}%`} />
				<CircularProgressbar className="progress-bar" value={ReactJSPercent} text={`${ReactJSPercent}%`} />
				<CircularProgressbar className="progress-bar" value={JavaPercent} text={`${JavaPercent}%`} />

				<CircularProgressbar className="progress-bar" value={PythonPercent} text={`${PythonPercent}%`} />
				<CircularProgressbar className="progress-bar" value={SQLPercent} text={`${SQLPercent}%`} />
				<p className="html-txt">HTML5</p>
				<p className="css-txt">CSS3</p>
				<p className="react-txt">ReactJS + Redux</p>
				<p className="java-txt">Java</p>
				<p className="python-txt">Python</p>
				<p className="sql-txt">SQL</p>
			</div>
		</React.Fragment>
	);
};

export default Skills;
