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
          Recently, I worked at Stomble (June 2019- February 2020) as a
          front-end developer in a <br /> SCRUM environment where we created a
          video platform using ReactJS, AWS APIs, <br /> Material UI and Redux
          Sagas. Also, used tools such as GitLab for pipeline testing and <br />{' '}
          ensuring the application would not encounter run-time error and Trello
          for organising <br /> SCRUM product backlog. The application connects
          businesses and users, allowing users <br /> to absorb content through
          videos that are posted by businesses.
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
