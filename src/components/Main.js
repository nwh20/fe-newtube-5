import React from 'react';
import './Main.scss';

const Main = ({video}) => {
	if (!video) {
		return <div id="loading">Loading</div>;
	}

	const videoId = video.id.videoID;
	const url = `https://www.youtube.com/embed/${videoId}`;

	return (
		<div className="page-main-video">
			<iframe src={url} title="main"></iframe>
			<div className="page-main-video-title">{video.snippet.title}</div>
			<div className="page-main-video-channel">{video.snippet.channelTitle}</div>
		</div>
	);
}

export default Main;