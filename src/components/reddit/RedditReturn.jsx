import React from 'react';
import Reddit from './Reddit';
import ListItemComponent from '../listItemComponent/ListItemComponent';


const RedditReturn = () => {

	return (
		<div>
			<div>
				<Reddit />
			</div>
			<div>
				<div>reddit return: </div>
				<img src='/gt86nurburgring.jpg'/>
				<ListItemComponent />
			</div>
		</div>
	);
};

export default RedditReturn;