import React from 'react';
import Slider from './SimpleSlider';

import Monitor from '../../assets/Monitor.svg';
import CodingBoy from '../../assets/StudentWorkingComp.svg';
import Divider from '../../assets/Divider2.svg';
import Task from '../../assets/Completing Tasks (male)-animated-illustration.json';
import Lottie from 'react-lottie';

import './style.scss';

const Projects = () => {
  return (
    <React.Fragment>
      <div className='projects-content' id='Project'>
        <img alt='' className='divider' src={Divider} />

        <div className='project-wrapper'>
          <h1 className='projectHeading'>PROJECTS</h1>

          <img alt='' className='codingboy' src={CodingBoy} />
        </div>

        <div className='monitor-wrapper'>
          <img alt='' className='monitor' src={Monitor} />
          <div className='slider-scale'>
            <Slider />
          </div>
        </div>
        <div className='task-animation'>
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: Task,
              rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice',
              },
            }}
            width={400}
            height={400}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Projects;
