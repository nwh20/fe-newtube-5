import React, { useEffect } from 'react';
import './Item.scss';

const Item = ({video, onVideoSelect}) => {
	const imageUrl = video.snippet.thumbnails.default.url;

	useEffect(()=>{
	
	})

	return (
		<li onClick={() => onVideoSelect(video)}>
			<div className="page-list-video-thumbnail">
				<img alt="thumbnail" src={imageUrl} />
			</div>
			<div className="page-list-video-info">
				<p>{video.snippet.title}</p>
				<p>{video.snippet.channelTitle}</p>
			</div>
		</li>
	);
}

export default Item;