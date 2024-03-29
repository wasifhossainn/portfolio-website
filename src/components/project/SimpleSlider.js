import React, { Component } from 'react';
import Slider from 'react-slick';
import Github from '../../assets/GitIcon.svg';
import Link from '../../assets/link-object-color (4).svg';
import Video from '../../assets/play-border-filled.svg';
import QuantumUIApp from '../../assets/QuantumUIApp.svg';
import carGame from '../../assets/carGame.svg';
import Algorithms from '../../assets/Algorithms.svg';
import OneVice from '../../assets/OneVice.svg';
import StreamApp from '../../assets/StreamApp.svg';
import ezyDonatePromo from '../../assets/ezyDonate-promo-website.svg';
import everNoteApp from '../../assets/Evernoteapp.svg';
import ePortfolio from '../../assets/WHPortfolio.svg';
import ezyDonate from '../../assets/ezyDonate.svg';
import SpaceInvaders from '../../assets/SpaceInvaders.svg';
import IOU from '../../assets/IOUApp.JPG';
import AntiCheatingExamSystem from '../../assets/Anticheatingexamsystem.png';
import Travelogue from '../../assets/Travelogue.png';
import FrontEndSimplified from '../../assets/frontendsimplified.png';

import './style.scss';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <div className='sliding-in'>
        <Slider {...settings}>
          {' '}
          <div className='flip-card'>
            <div className='flip-card-inner'>
              <div className='flip-card-front'>
                <img alt='' src={FrontEndSimplified} className='front' />
              </div>
              <div className='flip-card-back'>
                <h1>Front End Simplified</h1>
                <p>
                  A capstone project I worked on with the help of another peer which aims to teach students
                  how to code from the beginning and learn front end development which
                  would help them be able to acquire a job. My role consisted of being a front end developer who also assisted with
                  the user interface design and also conducted research for potential use cases of AI for job recommendations.
                  This application was created using Vue, Firebase, Nuxt, React, Stripe, and Element UI.
                </p>

                <div className='links-container'>
                  <a
                    rel='noopener noreferrer'
                    alt=''
                    target='_blank'
                    href='https://frontendsimplified.com/'
                  >
                    <img alt='' src={Link} className='linkclick' />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='flip-card'>
            <div className='flip-card-inner'>
              <div className='flip-card-front'>
                <img alt='' src={Travelogue} className='front' />
              </div>
              <div className='flip-card-back'>
                <h1>Travelogue</h1>
                <p>
                  A university project where I worked with a group of students
                  to design and create a web application which utilises AI to generate a trip
                  based on essential factors such as budget, time, location, number of individuals, date and time.
                  I was the technical lead of this project and managed a team of 12
                  and also worked as the UX designer and full stack developer. This application was created using the MERN Stack with TypeScript and also Google APIs.
                </p>

                <div className='links-container'>

                  <a
                    rel='noopener noreferrer'
                    alt=''
                    target='_blank'
                    href='https://www.youtube.com/watch?v=rSJsmoA4jxo'>
                    <img alt='' src={Video} className='playclick' />
                  </a>
                  <a
                    rel='noopener noreferrer'
                    alt=''
                    target='_blank'
                    href='https://github.com/Studio-3A'
                  >
                    <img alt='' className='gitclick' src={Github} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='flip-card'>
            <div className='flip-card-inner'>
              <div className='flip-card-front'>
                <img alt='' src={AntiCheatingExamSystem} className='front' />
              </div>
              <div className='flip-card-back'>
                <h1>Anti Cheat Exam System</h1>
                <p>
                  A university project where I worked with a group
                  to design and create a web application which would prevent
                  students from cheating online examinations by using AI to detect
                  cheating devices and allow teachers to report of any misconduct that may occur. I was the technical lead of this project and managed a team of 12 and
                  also worked as the UX designer and full stack developer. This application was created using the MERN Stack, Socket.IO, WebRTC and also a YOLO API.
                </p>

                <div className='links-container'>
                  <a
                    rel='noopener noreferrer'
                    alt=''
                    target='_blank'
                    href='https://gitlab.com/aces1/anti-cheating-examination-system'
                  >
                    <img alt='' className='gitclick' src={Github} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='flip-card'>
            <div className='flip-card-inner'>
              <div className='flip-card-front'>
                <img alt='' src={IOU} className='front' />
              </div>
              <div className='flip-card-back'>
                <h1>IOU Application</h1>
                <p>
                  A university project where I worked with a small group of students
                  to design and create a web application which is a social application
                  that would allow users to be able to track favours amongst there friends and groups. There
                  were also additional features of adding friends, sending favours and
                  recommendations of friends to add or favours to provide. I took the role of a
                  full stack engineer and also designed the user experience and interface of the
                  web application using the MERN stack.
                </p>

                <div className='links-container'>
                  <a
                    rel='noopener noreferrer'
                    alt=''
                    target='_blank'
                    href='https://github.com/mikaelamcnamara/IOU'
                  >
                    <img alt='' className='gitclick' src={Github} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='flip-card'>
            <div className='flip-card-inner'>
              <div className='flip-card-front'>
                <img alt='' src={QuantumUIApp} className='front' />
              </div>
              <div className='flip-card-back'>
                <h1>Quantum Circuit UI</h1>
                <p>
                  A university project where I worked with a group of students
                  to design and create a web application which aims to help
                  teach students about quantum circuits. I was the technical
                  lead of this project and managed a team of 12 and also worked
                  as the UX designer and full stack developer. This application
                  was created using the MERN Stack and also a quantum API.
                </p>

                <div className='links-container'>


                  <a
                    rel='noopener noreferrer'
                    alt=''
                    target='_blank'
                    href='https://polar-plains-05825.herokuapp.com/?fbclid=IwAR11DZzxHjyJAepfa7ybckPbhzjB9lmvI5eW7uxueIAqBnTgcPdyNEX9HO4'
                  >
                    <img alt='' src={Link} className='linkclick' />
                  </a>
                  <a
                    rel='noopener noreferrer'
                    alt=''
                    target='_blank'
                    href='https://gitlab.com/qsi2/quantum-user-interface'
                  >
                    <img alt='' className='gitclick' src={Github} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='flip-card'>
            <div className='flip-card-inner'>
              <div className='flip-card-front'>
                <img alt='' src={ezyDonatePromo} className='front' />
              </div>
              <div className='flip-card-back'>
                <h1>ezyDonate Promo</h1>
                <p>
                  First website project I worked on the side, to develop my
                  HTML5, CSS3 and JQuery skills. This website also uses
                  BootStrap and therefore the elements scale based on the
                  resolution of the browser. The website, simply is a promotion
                  for my previous mobile application called ezyDonate, showing
                  features of the app.
                </p>

                <div className='links-container'>

                  <a
                    rel='noopener noreferrer'
                    alt=''
                    target='_blank'
                    href='https://wasifhossainn.github.io/ezyDonate-promo-website/'
                  >
                    <img alt='' src={Link} className='linkclick' />
                  </a>
                  <a
                    rel='noopener noreferrer'
                    alt=''
                    target='_blank'
                    href='https://github.com/wasifhossainn/ezyDonate-promo-website'
                  >
                    <img alt='' className='gitclick' src={Github} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='flip-card'>
            <div className='flip-card-inner'>
              <div className='flip-card-front'>
                <img alt='' src={ePortfolio} className='front' />
              </div>
              <div className='flip-card-back'>
                <h1> E-Portfolio Website</h1>
                <p>
                  Personal project where I used React, Router, Sass, React
                  Springs and Lottie library. The purpose of this application is
                  to showcase my achivements and projects, therefore my passion
                  for Software Engineering. This is also my most recent project
                  I have been working on.
                </p>
                <a
                  rel='noopener noreferrer'
                  alt=''
                  target='_blank'
                  href='https://github.com/wasifhossainn/portfolio-website'
                >
                  <img alt='' className='gitclick' src={Github} />
                </a>
              </div>
            </div>
          </div>
          <div className='flip-card'>
            <div className='flip-card-inner'>
              <div className='flip-card-front'>
                <img alt='' src={StreamApp} className='front' />
              </div>
              <div className='flip-card-back'>
                <h1>StreamZ App</h1>
                <p>
                  Side Project I worked on using React, Router, Redux thunk,
                  Axios, Semantic UI and Google O-Auth. The application allows
                  you to create an account and streams and also be able to view
                  other streams. The user essentially streams through a video
                  stream application and has a stream key which is passed
                  through a RTMP server and then it will feed it onto the
                  viwer's browser, which allows users to be able to view a
                  stream.
                </p>

                <div className='links-container'>

                  <a
                    rel='noopener noreferrer'
                    alt=''
                    target='_blank'
                    href='
											https://www.youtube.com/watch?v=wkU2ug9M3UQ&feature=youtu.be'
                  >
                    <img alt='' src={Video} className='playclick' />
                  </a>
                  <a
                    rel='noopener noreferrer'
                    alt=''
                    target='_blank'
                    href='https://github.com/wasifhossainn/streams'
                  >
                    <img alt='' className='gitclick' src={Github} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='flip-card'>
            <div className='flip-card-inner'>
              <div className='flip-card-front'>
                <img alt='' src={OneVice} className='front' />
              </div>
              <div className='flip-card-back'>
                <h1>OneVice</h1>
                <p>
                  University Project working in a team, I worked as a full-stack
                  developer using Java, XML and Firebase Database to create the
                  design and functionalities. OneVice, is an e-commerce
                  application that allows users to be able to purchase and sell
                  electronic devices online. There are also additional
                  functionalities such as recommendations and customising
                  profile.
                </p>

                <div className='links-container'>

                  <a
                    rel='noopener noreferrer'
                    alt=''
                    target='_blank'
                    href='
									https://www.youtube.com/watch?v=hsRhr7fpbcY&feature=youtu.be'
                  >
                    <img alt='' src={Video} className='playclick' />
                  </a>

                  <a
                    rel='noopener noreferrer'
                    alt=''
                    target='_blank'
                    href='https://github.com/DavidOsburnUTS/studio-group8'
                  >
                    <img alt='' className='gitclick' src={Github} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='flip-card'>
            <div className='flip-card-inner'>
              <div className='flip-card-front'>
                <img alt='' src={ezyDonate} className='front' />
              </div>
              <div className='flip-card-back'>
                <h1>ezyDonate</h1>
                <p>
                  University Project working in a team, I worked as a front-end
                  developer using Java and XML however, I assisted back-end by
                  integrating Firebase queries into the application. ezyDonate,
                  is an application that connects donors and charities. It
                  allows donors to be able to donate, make bookings, view and
                  cancel events.
                </p>

                <div className='links-container'>

                  <a
                    rel='noopener noreferrer'
                    alt=''
                    target='_blank'
                    href='
										https://www.youtube.com/watch?v=3tOcMkz4dwE&feature=youtu.be'
                  >
                    <img alt='' src={Video} className='playclick' />
                  </a>
                  <a
                    rel='noopener noreferrer'
                    alt=''
                    target='_blank'
                    href='https://github.com/mikaelamcnamara/ezyDonate'
                  >
                    <img alt='' className='gitclick' src={Github} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='flip-card'>
            <div className='flip-card-inner'>
              <div className='flip-card-front'>
                <img alt='' src={everNoteApp} className='front' />
              </div>
              <div className='flip-card-back'>
                <h1>EverNote App</h1>
                <p>
                  Side Project I worked on following a tutorial to learn about
                  React and Firebase. Evernote app allows you to add/delete
                  notes and also be able to customise the formatting such as
                  bold, heading and adding attachments, underline and add bullet
                  points. It also saves your notes, as it is stored in firebase.
                </p>

                <div className='links-container'>

                  <a
                    rel='noopener noreferrer'
                    alt=''
                    target='_blank'
                    href='https://wasifhossainn.github.io/evernote/'
                  >
                    <img alt='' src={Link} className='linkclick' />
                  </a>
                  <a
                    rel='noopener noreferrer'
                    alt=''
                    target='_blank'
                    href='https://github.com/wasifhossainn/evernote'
                  >
                    <img alt='' className='gitclick' src={Github} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='flip-card'>
            <div className='flip-card-inner'>
              <div className='flip-card-front'>
                <img alt='' src={Algorithms} className='front' />
              </div>
              <div className='flip-card-back'>
                <h1>Algorithms App</h1>
                <p>
                  High School Project using Python which includes search and
                  sorting algorithms such as binary, linear, bubble, insertion
                  and selection sort. The application has Graphical User
                  Interface and prompts the user for an array, and then they can
                  select a sort and which number they would like to search for
                  using either binary or linear. The application then outputs
                  the index of the number they wanted to search for.
                </p>

                <div className='links-container'>

                  <a
                    rel='noopener noreferrer'
                    alt=''
                    target='_blank'
                    href='https://www.youtube.com/watch?v=s4XXr5mWGTo&feature=youtu.be'
                  >
                    <img alt='' src={Video} className='playclick' />
                  </a>
                  <a
                    rel='noopener noreferrer'
                    alt=''
                    target='_blank'
                    href='https://github.com/wasifhossainn/algorithms'
                  >
                    <img alt='' className='gitclick' src={Github} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='flip-card'>
            <div className='flip-card-inner'>
              <div className='flip-card-front'>
                <img alt='' src={carGame} className='front' />
              </div>
              <div className='flip-card-back'>
                <div className='description-column'>
                  <h1>CAR RUSH</h1>
                  <p>
                    Side Project I worked on using Python 3.4, where you have to
                    dodge incoming cars by using arrow keys. Game also has
                    additional functionalities such as menu, music, instruction
                    and high score.
                  </p>
                  <div className='links-container'>

                    <a
                      rel='noopener noreferrer'
                      alt=''
                      target='_blank'
                      href='https://www.youtube.com/watch?v=iwKxE6eLuHw&feature=youtu.be'
                    >
                      <img alt='' src={Video} className='playclick' />
                    </a>
                    <a
                      rel='noopener noreferrer'
                      alt=''
                      target='_blank'
                      href='https://github.com/wasifhossainn/carRush'
                    >
                      <img alt='' src={Github} className='gitclick' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flip-card'>
            <div className='flip-card-inner'>
              <div className='flip-card-front'>
                <img alt='' src={SpaceInvaders} className='front' />
              </div>
              <div className='flip-card-back'>
                <h1>EARTH X ALIENS</h1>
                <p>
                  High School Project working in a team, I worked on the
                  front-end using Python and interface for the game. The
                  objective of the game is to defeat the aliens and it also
                  includes a multiplayer mode. There are also additonal
                  functions in the game such as power ups and high score.
                </p>

                <div className='links-container'>

                  <a
                    rel='noopener noreferrer'
                    alt=''
                    target='_blank'
                    href='https://www.youtube.com/watch?v=yAzAS21myGg&feature=youtu.be'
                  >
                    <img alt='' src={Video} className='playclick' />
                  </a>
                  <a
                    rel='noopener noreferrer'
                    alt=''
                    target='_blank'
                    href='https://github.com/wasifhossainn/SpaceInvader'
                  >
                    <img alt='' className='gitclick' src={Github} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
