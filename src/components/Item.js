import React from 'react';
import '../styles/Item.scss';

const Item = ({video, onVideoSelect}) => {
	const imageUrl = video.snippet.thumbnails.default.url;

	return (
		<li onClick={() => onVideoSelect(video)}>
			<div className="page-list-video-box">
				<img alt="thumbnail" src={imageUrl} />
			</div>
			<div className="page-list-video-info">
				<p className="title">{video.snippet.title}</p>
				<p className="channel">{video.snippet.channelTitle}</p>
			</div>
		</li>
	)
}

export default Item;