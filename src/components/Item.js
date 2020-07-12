import React, { useEffect } from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
	const imageUrl = video.snippet.thumbnails.default.url;
	useEffect(()=>{
		const log = video.snippet;
		console.log(log);
	})
	return (
		<li onClick={() => onVideoSelect(video)}>
			<div>
				<img alt="thn" src={imageUrl} />
			</div>
			<div>
				<p>{video.snippet.title}</p>
				<div>{video.snippet.publishedAt}</div>
			</div>
		</li>
	);
}

export default VideoItem;