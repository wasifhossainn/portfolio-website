import React from 'react';

import Team from '../../assets/Team.svg';
import Divider from '../../assets/Divider2.svg';

import HTML5 from '../../assets/html5-original.svg';
import CSS3 from '../../assets/css3-original.svg';
import Javascript from '../../assets/javascript-original.svg';
import ReactIcon from '../../assets/react-original.svg';
import ReduxIcon from '../../assets/redux-original.svg';
import Python from '../../assets/python-original.svg';
import Java from '../../assets/java-original.svg';
import SQL from '../../assets/mysql-original.svg';
import C from '../../assets/c-original.svg';

import './style.scss';

const Skills = () => {
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

				<div className="skill-icon-container">
					<img alt="" className="skill-icon" src={HTML5} />
					<img alt="" className="skill-icon" src={CSS3} />
					<img alt="" className="skill-icon" src={Javascript} />
					<img alt="" className="skill-icon" src={ReactIcon} />
					<img alt="" className="skill-icon" src={ReduxIcon} />
					<img alt="" className="skill-icon" src={Python} />
					<img alt="" className="skill-icon" src={Java} />
					<img alt="" className="skill-icon" src={SQL} />
					<img alt="" className="skill-icon" src={C} />
				</div>
			</div>
		</React.Fragment>
	);
};

export default Skills;
