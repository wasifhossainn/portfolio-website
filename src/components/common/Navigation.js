import React, { Component } from 'react';
import './style.scss';
import classnames from 'classnames';
import Logo from '../../assets/WH Logo.png';
import { Link } from 'react-scroll';

class Navigation extends Component {
	constructor(props) {
		super(props);

		this.state = {
			prevScrollpos: window.pageYOffset,
			visible: true
		};
	}

	// Adds an event listener when the component is mount.
	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	// Remove the event listener when the component is unmount.
	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	// Hide or show the menu.
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
			<nav
				className={classnames('navbar', {
					'navbar--hidden': !this.state.visible
				})}
			>
				<Link activeClass="active" to="Footer" spy={true} smooth={true} offset={-70} duration={500}>
					<img src={Logo} alt="/" className="logo" />
				</Link>
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
						<Link activeClass="active" to="Skills" spy={true} smooth={true} offset={250} duration={500}>
							<button className="skillBtn">Skills</button>
						</Link>
					</li>
				</ul>
			</nav>
		);
	}
}

export default Navigation;
