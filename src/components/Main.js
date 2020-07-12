import React from 'react';

const Main = ({video}) => {
	if (!video) {
		return <div id="loading">Loading</div>;
	}

	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;

	return (
		<>
			<div>
				<iframe src={url} title="main"></iframe>
			</div>
			<div>
				<div>{video.snippet.title}</div>
			</div>
		</>
	);
}

export default Main;