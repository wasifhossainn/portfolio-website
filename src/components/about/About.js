import React from 'react';
import { useSpring, animated } from 'react-spring';

import Divider from '../../assets/Divider2.svg';
import Boy from '../../assets/TechBoy.svg';
import LinkedIn from '../../assets/LinkedInIcon.svg';
import Email from '../../assets/EmailIcon.svg';
import Github from '../../assets/GitIcon.svg';
import Resume from '../../assets/ResumeIcon.svg';
import Lottie from 'react-lottie';
import Message from '../../assets/Chat bubbles-animated-illustration (1).json';
import PDF from '../../assets/Wasif-Hossain-Resume.pdf';

import './style.scss';

const About = () => {
  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: '500',
  });

  return (
    <animated.div style={fade}>
      <React.Fragment>
        <div className='content' id='About'>
          <img alt='' className='techboy' src={Boy} />

          <img alt='' className='divider' src={Divider} />
          <h1 className='aboutHeading'>ABOUT ME</h1>
          <p className='about-section-1'>
            Hi, my name is Wasif Hossain and I am a 3rd year
            <br />
            Software Engineering Student at University of Technology Sydney.
          </p>
          <p className='about-section-2'>
            I'm a passionate and a hardworking individual who has had recent
            experience working as a full-time front-end developer at Stomble.
            <br />
            This exposed me to web and mobile development as I used ReactJS
            Framework to create a video platform application.
          </p>
          <p className='about-section-3'>
            I aspire to consistently develop my web and mobile programming
            skills. I believe that software engineering gives me opportunities
            and provides me exposure to tools and skills which can be
            implemented in real-world problems to produce premium quality
            applications and solutions. These solutions can solve problems in an
            innovative way and enhance interactions that are made between the
            user and their devices.
          </p>
          <div className='social-heading-container' id='Contact'>
            <div className='social-heading-centre'>
              <h1 className='socialHeading'>SOCIAL LINKS</h1>
            </div>
            <div className='chatbubble'>
              <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: Message,
                  rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice',
                  },
                }}
                width={400}
                height={400}
              />
            </div>
          </div>
          <div className='social-container'>
            <div className='icon-column'>
              <a
                rel='noopener noreferrer'
                alt=''
                target='_blank'
                href='https://github.com/wasifhossainn'
              >
                <img alt='' className='flex-item' src={Github} />
              </a>

              <p className='icon-txt'>Github</p>
            </div>

            <div className='icon-column'>
              <a
                alt=''
                rel='noopener noreferrer'
                target='_blank'
                href='https://au.linkedin.com/in/wasif-hossain-b4398115a'
              >
                <img alt='' className='flex-item' src={LinkedIn} />
              </a>
              <p className='icon-txt'>LinkedIn</p>
            </div>

            <div className='icon-column'>
              <a
                alt=''
                rel='noopener noreferrer'
                target='_blank'
                href='mailto:wasif.hossain@hotmail.com'
              >
                <img alt='' className='flex-item' src={Email} />
              </a>
              <p className='icon-txt'>Email</p>
            </div>

            <div className='icon-column'>
              <a alt='' rel='noopener noreferrer' target='_blank' href={PDF}>
                <img alt='' className='flex-item' src={Resume} />
              </a>
              <p className='icon-txt'>Resume</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    </animated.div>
  );
};

export default About;
