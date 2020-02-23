import React from 'react';
import LoadingImage from '../../assets/Loading.json';
import Lottie from 'react-lottie';
import './style.scss';

class Loading extends React.Component {
	render() {
		return (
			<div className="background-color">
				<div className="animation">
					<Lottie
						options={{
							loop: true,
							autoplay: true,
							animationData: LoadingImage,
							rendererSettings: {
								preserveAspectRatio: 'xMidYMid slice'
							}
						}}
						width={600}
						height={600}
					/>
				</div>
				<h2 className="loadingText"> Building...</h2>
			</div>
		);
	}
}

export default Loading;
