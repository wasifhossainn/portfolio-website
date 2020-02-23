import React, { Component } from 'react';
import { Link } from 'react-scroll';

import SideBar from '../common/SideBar';
import Logo from '../../assets/WH Logo.png';
import navIcon from '../../assets/menu-color-filled.svg';
import crossIcon from '../../assets/cancel-simple-filled.svg';

import './style.scss';
import classnames from 'classnames';

class Navigation extends Component {
	constructor(props) {
		super(props);

		this.state = {
			close: true,
			prevScrollpos: window.pageYOffset,
			visible: true
		};
		this.menuButton = this.menuButton.bind(this);
	}

	// Open SideBar
	menuButton = () => {
		const { close } = this.state;
		this.setState({
			close: !close
		});
	};

	// Adds an event listener when the component is mount
	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	// Remove the event listener when the component is unmount
	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	// Hide/show menu 
	handleScroll = () => {
		const { prevScrollpos } = this.state;

		const currentScrollPos = window.pageYOffset;
		const visible = prevScrollpos > currentScrollPos;

		this.setState({
			prevScrollpos: currentScrollPos,
			visible
		});
	};

	render() {
		return (
			<React.Fragment>
				<nav
					className={classnames('navbar', {
						'navbar--hidden': !this.state.visible
					})}
				>
					<Link activeClass="active" to="Footer" spy={true} smooth={true} offset={-70} duration={500}>
						<img src={Logo} alt="/" className="logo" />
					</Link>
					<div className="navbar-buttons">
						<ul>
							<li>
								<Link activeClass="active" to="Home" spy={true} smooth={true} offset={70} duration={500}>
									<button className="homeBtn">Home</button>
								</Link>
							</li>

							<li>
								<Link activeClass="active" to="About" spy={true} smooth={true} offset={50} duration={500}>
									<button className="aboutBtn">About</button>
								</Link>
							</li>

							<li>
								<Link activeClass="active" to="Project" spy={true} smooth={true} offset={0} duration={500}>
									<button className="projectBtn">Projects</button>
								</Link>
							</li>

							<li>
								<Link activeClass="active" to="Skills" spy={true} smooth={true} offset={230} duration={500}>
									<button className="skillBtn">Skills</button>
								</Link>
							</li>
						</ul>
					</div>
					<div onClick={this.menuButton} className="menu-toggle">
						<img className="menu" src={!this.state.close ? navIcon : crossIcon} alt="/" />
					</div>
				</nav>

				<div
					className={classnames('sidebar--hidden', {
						sidebar: this.state.close && this.state.visible
					})}
				>
					<SideBar />
				</div>
			</React.Fragment>
		);
	}
}

export default Navigation;
