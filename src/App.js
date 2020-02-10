import React from 'react';

// Pages
import Navigation from './components/common/Navigation';
import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/project/Projects';
import Skills from './components/skills/Skills';
import Footer from './components/footer/Footer';
import Loading from './components/common/Loading';
import './index.scss';

class App extends React.Component {
	state = {
		loading: false
	};

	componentWillMount() {
		setTimeout(() => {
			this.setState({
				loading: true
			});
		}, 1500);
	}

	renderContent = () => {
		if (!this.state.loading) {
			return <Loading />;
		}
		return (
			<div>
				<Navigation />
				<Home />
				<About />
				<Projects />
				<Skills />
				<Footer />
			</div>
		);
	};

	render() {
		return this.renderContent();
	}
}

export default App;
