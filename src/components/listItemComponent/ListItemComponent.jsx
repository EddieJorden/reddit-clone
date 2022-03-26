import React from 'react';
import { useSelector } from 'react-redux';
import { selectRedditReturn } from '../reddit/RedditSlice';
import styled from 'styled-components';

const TileDiv = styled.div`
    width: 1000px;
    height: 100px;
    background-color: white;
    margin: 10px;
`;

const ListItemComponent = () => {
	const redditApiReturn = useSelector(selectRedditReturn);
	console.log('redditApiReturn', redditApiReturn);

	if(!redditApiReturn.data) {
		console.log('api return.data is not true', redditApiReturn.data);
		return <div>reddit is loading...</div>;
	} else 
		return (
			<div>
				{console.log('redditApiReturn.data', redditApiReturn.data)}
				{
					redditApiReturn.data.children.map((each, index) => {
						const { 
							// created,
							// author,
							// ups,
							title,
							thumbnail,
							// permalink
						} = each.data;
						const defaultThumb = 'gt86nurburgring.jpeg';
						return (
							<div key={index}>
								<TileDiv>
									<div style={{display: 'flex', color: 'black'}}>
										<img src={thumbnail || defaultThumb} alt={title} style={{maxHeight: '100px'}}/>
										<div>
											<div >{title}</div>
										</div>
									</div>
								</TileDiv>
							</div>
						);
					})
				}
			</div>
		);
};

export default ListItemComponent;
