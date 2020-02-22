import React from 'react';

import Team from '../../assets/Team.svg';

import Divider from '../../assets/Divider2.svg';

import ChangingProgressProvider from './ChangingProgressProvider';
import { CircularProgressbar, CircularProgressbarWithChildren } from 'react-circular-progressbar';
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
					{/* <CircularProgressbar className="progress-bar" value={HTMLPercent} text={'HTML5'} /> */}
					<ChangingProgressProvider className="progress-bar" values={[ 0, 20, 40, 60, 80 ]}>
						{(percentage) => <CircularProgressbar value={percentage} text={'HTML    ' + `${percentage}%`} />}
					</ChangingProgressProvider>
					<ChangingProgressProvider className="progress-bar" values={[ 0, 20, 40, 60, 70 ]}>
						{(percentage) => <CircularProgressbar value={percentage} text={'CSS3 ' + `${percentage}%`} />}
					</ChangingProgressProvider>
					<ChangingProgressProvider className="progress-bar" values={[ 0, 20, 40, 60, 80 ]}>
						{(percentage) => <CircularProgressbar value={percentage} text={'React ' + `${percentage}%`} />}
					</ChangingProgressProvider>
					<ChangingProgressProvider className="progress-bar" values={[ 0, 20, 40, 60, 90 ]}>
						{(percentage) => <CircularProgressbar value={percentage} text={'Java ' + `${percentage}%`} />}
					</ChangingProgressProvider>
					<ChangingProgressProvider className="progress-bar" values={[ 0, 20, 40, 60, 80 ]}>
						{(percentage) => <CircularProgressbar value={percentage} text={'Python ' + `${percentage}%`} />}
					</ChangingProgressProvider>
					<ChangingProgressProvider className="progress-bar" values={[ 0, 10, 20, 40, 60 ]}>
						{(percentage) => <CircularProgressbar value={percentage} text={'SQL ' + `${percentage}%`} />}
					</ChangingProgressProvider>
					{/* <CircularProgressbar className="progress-bar" value={CSSPercent} text={'CSS3'} />
					<CircularProgressbar className="progress-bar" value={ReactJSPercent} text={'React + Redux'} />
					<CircularProgressbar className="progress-bar" value={JavaPercent} text={'Java'} />
					<CircularProgressbar className="progress-bar" value={PythonPercent} text={'Python'} />
					<CircularProgressbar className="progress-bar" value={SQLPercent} text={'SQL'} /> */}
				</div>
			</div>
		</React.Fragment>
	);
};

export default Skills;
