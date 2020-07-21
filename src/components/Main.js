import React from 'react';
import '../styles/Main.scss';

const Main = ({video}) => {
	if (!video) {
		return <div className="loading">Loading</div>;
	}

	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;

	return (
		<div className="page-main-video">
			<div className="page-main-video-box">
				<iframe src={url} title="main" />
			</div>
			{/* <div className="page-main-video-info">
				<p className="title main">{video.snippet.title}</p>
				<p className="channel main">{video.snippet.channelTitle}</p>
			</div> */}
		</div>
	)
}

export default Main;