import React from 'react';
import Item from './Item';
import './List.scss';

const List = (props) => {
	const Items = props.videos.map((video) => {
		return (
			<Item onVideoSelect={props.onVideoSelect} key={video.etag} video={video} />
		);
	});

	return (
		<ul>
			{Items}
		</ul>
	);
}

export default List;