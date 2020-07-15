import React, { useEffect } from 'react';
import './Item.scss';

const VideoItem = ({ video, onVideoSelect }) => {
	const imageUrl = video.snippet.thumbnails.default.url;
	useEffect(()=>{
		const log = video.snippet;
		console.log(log);
	})
	return (
		<li onClick={() => onVideoSelect(video)}>
			<div className="page-list-video-thumnail">
				<img alt="thumbnail" src={imageUrl} />
			</div>
			<div className="page-list-video-info">
				<p>{video.snippet.title}</p>
			</div>
		</li>
	);
}

export default VideoItem;