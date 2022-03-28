import React from 'react';

import Team from '../../assets/Team.svg';
import Divider from '../../assets/Divider2.svg';

import HTML5 from '../../assets/html5-original.svg';
import CSS3 from '../../assets/css3-original.svg';
import Javascript from '../../assets/javascript-original.svg';
import ReactIcon from '../../assets/react-original.svg';
import ReduxIcon from '../../assets/redux-original.svg';
import MongoDBIcon from '../../assets/mongodb.svg';
import ExpressIcon from '../../assets/express-109.svg';
import NodeJSIcon from '../../assets/nodejs-1.svg';
import Python from '../../assets/python-original.svg';
import Java from '../../assets/java-original.svg';
import SQL from '../../assets/mysql-original.svg';
import C from '../../assets/c-original.svg';
import Android from '../../assets/android.svg';

import './style.scss';

const Skills = () => {
  return (
    <React.Fragment>
      <div className='skill-content' id='Skills'>
        <img alt='' className='divider' src={Divider} />
        <img alt='' className='team' src={Team} />
        <h1 className='skillHeading'>TECHNICAL SKILLS</h1>
        <p className='skill-section-1'>
          I have had experience across web and mobile development from my experience at <br /> Buzzy Buzz & Stomble (June 2019 - Feb 2021) and also machine learning at SpiralBlue (Nov 2021 - Present).
          <br /> <br /> For my experience at Stomble I worked as a full stack engineer in a SCRUM based environment where  <br /> I was responsible or creating a video platform using ReactJS, AWS APIs, Material UI and Redux Sags.
          <br />
          <br />
          As for Buzzy Buzz I had also worked as a full stack engineer but also as a mobile developer in order to <br /> produce features and functions on top of their no-code solution platform using MeteorJS, NodeJS, React Native, React, HTML5 and Javascript.

          <br />
          < br /> Recently, I had worked at Spiral Blue as a machine learning developer which involved further research, developing and testing on technologies such as python, tensorflow, openCV, Microsoft Azure, cvat and also space edge computing, observation satellites, deep learning, advanced image segmentation and compression.

          <br />
          <br />
          I have also used tools such as GitLab for pipeline testing and ensuring that the application would not encounter run-time errors and Trello/ Jira for organising the SCRUM product backlog. As a result, I have had
          experience in both remote and office based which are in agile based environments to develop applications which would be used by several users and adopted by enterprises.
        </p>
        <div className='skill-icon-container'>
          <img alt='' title='HTML5' className='skill-icon' src={HTML5} />
          <img alt='' title='CSS3' className='skill-icon' src={CSS3} />
          <img
            alt=''
            title='Vanilla Javascript'
            className='skill-icon'
            src={Javascript}
          />
          <img
            alt=''
            title='MonogoDB'
            className='skill-icon'
            src={MongoDBIcon}
          />
          <img
            alt=''
            title='Express'
            className='skill-icon'
            src={ExpressIcon}
          />
          <img alt='' title='React' className='skill-icon' src={ReactIcon} />
          <img alt='' title='Redux' className='skill-icon' src={ReduxIcon} />
          <img alt='' title='Node.JS' className='skill-icon' src={NodeJSIcon} />
          <img alt='' title='Python' className='skill-icon' src={Python} />
        </div>
        <div className='skill-icon-container'>
          <img alt='' title='Java' className='skill-icon' src={Java} />
          <img alt='' title='SQL' className='skill-icon' src={SQL} />
          <img alt='' title='C' className='skill-icon' src={C} />
          <img
            alt=''
            title='Android Development'
            className='skill-icon'
            src={Android}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Skills;
