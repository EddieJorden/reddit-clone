import React from 'react';
import Reddit from './Reddit';
import ListItemComponent from '../listItemComponent/ListItemComponent';
import defaultThumbnail from '../listItemComponent/gt86nurburgring.jpg';

const RedditReturn = () => {

	return (
		<div>
			<div>
				<Reddit />
			</div>
			<div>
				<div>reddit return: </div>
				<img style={{maxHeight: '610px'}} src={defaultThumbnail}/>
				<ListItemComponent />
			</div>
		</div>
	);
};

export default RedditReturn;