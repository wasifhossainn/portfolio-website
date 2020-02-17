import React, { Component } from 'react';
import Slider from 'react-slick';

import Github from '../../assets/GitIcon.svg';
import carGame from '../../assets/carGame.svg';

import Algorithms from '../../assets/Algorithms.svg';

import OneVice from '../../assets/OneVice.svg';
import StreamApp from '../../assets/StreamApp.svg';

import ezyDonatePromo from '../../assets/ezyDonate-promo-website.svg';

import everNoteApp from '../../assets/Evernoteapp.svg';

import ePortfolio from '../../assets/WHPortfolio.svg';

import ezyDonate from '../../assets/ezyDonate.svg';
import SpaceInvaders from '../../assets/SpaceInvaders.svg';
import './style.scss';

export default class SimpleSlider extends Component {
	render() {
		const settings = {
			dots: true,
			infinite: false,
			slidesToShow: 1,
			slidesToScroll: 1
		};

		return (
			<div className="sliding-in">
				<Slider {...settings}>
					<div className="flip-card">
						<div className="flip-card-inner">
							<div className="flip-card-front">
								<img  alt="" src={carGame} className="front" />
							</div>
							<div className="flip-card-back">
								<h1>CAR RUSH</h1>
								<p>
									Side Project I worked on using Python 3.4, where you have to dodge incoming cars by using arrow keys.{' '}
									<br /> Game also has additional functionalities such as menu, music, instruction and high score.
								</p>
								<a rel="noopener noreferrer" alt="" target="_blank" href="https://github.com/wasifhossainn/carRush">
									<img alt="" className="gitclick" src={Github} />
								</a>
							</div>
						</div>
					</div>
					<div className="flip-card">
						<div className="flip-card-inner">
							<div className="flip-card-front">
								<img  alt=""  src={SpaceInvaders} className="front" />
							</div>
							<div className="flip-card-back">
								<h1>EARTH X ALIENS</h1>
								<p>
									High School Project working in a team, I worked on the front-end using Python and interface for the
									game. The objective of the game is to defeat the aliens and it also includes a multiplayer mode. There
									are also additonal functions in the game such as power ups and high score.
								</p>
								<a
									rel="noopener noreferrer"
									alt=""
									target="_blank"
									href="https://github.com/wasifhossainn/SpaceInvaders"
								>
									<img alt="" className="gitclick" src={Github} />
								</a>
							</div>
						</div>
					</div>
					<div className="flip-card">
						<div className="flip-card-inner">
							<div className="flip-card-front">
								<img  alt="" src={OneVice} className="front" />
							</div>
							<div className="flip-card-back">
								<h1>OneVice</h1>
								<p>
									University Project working in a team, I worked as a full-stack developer using Java, XML and Firebase
									Database to create the design and functionalities. OneVice, is an e-commerce application that allows
									users to be able to purchase and sell electronic devices online. There are also additional
									functionalities such as viewing categories of products, recommendations and customising profile.
								</p>
								<a
									rel="noopener noreferrer"
									alt=""
									target="_blank"
									href="https://github.com/DavidOsburnUTS/studio-group8"
								>
									<img alt="" className="gitclick" src={Github} />
								</a>
							</div>
						</div>
					</div>
					<div className="flip-card">
						<div className="flip-card-inner">
							<div className="flip-card-front">
								<img  alt="" src={ezyDonate} className="front" />
							</div>
							<div className="flip-card-back">
								<h1>ezyDonate</h1>
								<p>
									University Project working in a team, I worked as a front-end developer using Java and XML however, I
									assisted back-end by integrating Firebase queries into the application. ezyDonate, is an application
									that connects donors and charities. It allows donors to be able to donate, make bookings, view and
									cancel events.
								</p>
								<a rel="noopener noreferrer" alt="" target="_blank" href="https://github.com/mikaelamcnamara/ezyDonate">
									<img alt="" className="gitclick" src={Github} />
								</a>
							</div>
						</div>
					</div>
					<div className="flip-card">
						<div className="flip-card-inner">
							<div className="flip-card-front">
								<img  alt=""  src={everNoteApp} className="front" />
							</div>
							<div className="flip-card-back">
								<h1>EverNote App</h1>
								<p>
									Side Project I worked on following a tutorial to learn about React and Firebase. Evernote app allows
									you to add/delete notes and also be able to customise the formatting such as bold, heading and adding
									attachments, underline and add bullet points. It also saves your notes, as it is stored in firebase.
								</p>
								<a rel="noopener noreferrer" alt="" target="_blank" href="https://github.com/wasifhossainn/evernote">
									<img alt="" className="gitclick" src={Github} />
								</a>
							</div>
						</div>
					</div>
					<div className="flip-card">
						<div className="flip-card-inner">
							<div className="flip-card-front">
								<img alt="" src={StreamApp} className="front" />
							</div>
							<div className="flip-card-back">
								<h1>StreamZ App</h1>
								<p>
									Side Project I worked on using React, Router, Redux thunk, Axios, Semantic UI and Google O-Auth. The
									application allows you to create an account and streams and also be able to view other streams. The
									user essentially streams through a video stream application and has a stream key which is passed
									through a RTMP server and then it will feed it onto the viwer's browser, which allows users to be able
									to view a stream.
								</p>
								<a rel="noopener noreferrer" alt="" target="_blank" href="https://github.com/wasifhossainn/streams">
									<img alt="" className="gitclick" src={Github} />
								</a>
							</div>
						</div>
					</div>{' '}
					<div className="flip-card">
						<div className="flip-card-inner">
							<div className="flip-card-front">
								<img  alt=""  src={ezyDonatePromo} className="front" />
							</div>
							<div className="flip-card-back">
								<h1>ezyDonate Promo</h1>
								<p>
									First website project I worked on the side, to develop my HTML5, CSS3 and JQuery skills. This website
									also uses BootStrap and therefore the elements scale based on the resolution of the browser. The
									website, simply is a promotion for my previous mobile application called ezyDonate, showing features
									of the app.
								</p>
								<a
									rel="noopener noreferrer"
									alt=""
									target="_blank"
									href="https://github.com/wasifhossainn/ezyDonate-promo-website"
								>
									<img alt="" className="gitclick" src={Github} />
								</a>
							</div>
						</div>
					</div>{' '}
					<div className="flip-card">
						<div className="flip-card-inner">
							<div className="flip-card-front">
								<img  alt="" src={Algorithms} className="front" />
							</div>
							<div className="flip-card-back">
								<h1>Algorithms App</h1>
								<p>
									High School Project using Python which includes search and sorting algorithms such as binary, linear,
									bubble, insertion and selection sort. The application has Graphical User Interface and prompts the
									user for an array, and then they can select a sort and which number they would like to search for
									using either binary or linear. The application then outputs the index of the number they wanted to
									search for.
								</p>
								<a rel="noopener noreferrer" alt="" target="_blank" href="https://github.com/wasifhossainn/algorithms">
									<img alt="" className="gitclick" src={Github} />
								</a>
							</div>
						</div>
					</div>
					<div className="flip-card">
						<div className="flip-card-inner">
							<div className="flip-card-front">
								<img  alt=""  src={ePortfolio} className="front" />
							</div>
							<div className="flip-card-back">
								<h1> E-Portfolio Website</h1>
								<p>
									Personal project where I used React, Router, Sass, React Springs and Lottie library. The purpose of
									this applicationis to showcase my achivements and projects, therefore my passion for Software
									Engineering. This is also my most recent project I have been working on.
								</p>
								<a
									rel="noopener noreferrer"
									alt=""
									target="_blank"
									href="https://github.com/wasifhossainn/portfolio-website"
								>
									<img alt="" className="gitclick" src={Github} />
								</a>
							</div>
						</div>
					</div>
				</Slider>
			</div>
		);
	}
}
