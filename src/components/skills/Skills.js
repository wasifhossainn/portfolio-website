import React from 'react';

import Team from '../../assets/Team.svg';

import Divider from '../../assets/Divider2.svg';

import './style.scss';

const Skills = () => {
	return (
		<React.Fragment>
			<img alt="" className="divider" src={Divider} />
			<div className="skill" id="Skills">
				Technical Skills
			</div>
		</React.Fragment>
	);
};

export default Skills;
