import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateRedditReturn } from './RedditSlice';
import { selectUserSearchTerm } from './RedditSlice';

const Reddit = () => {
	const dispatch = useDispatch();
	const userSearchTerm = useSelector(selectUserSearchTerm);
    
	useEffect(() => {
        
		async function fetchApi () {
			const limit = 10;
			const apiToFetch = `https://www.reddit.com/r/${userSearchTerm}.json?limit=${limit}`;
			const response = await fetch(apiToFetch, {'type' : 'no-cors'});
			const json = await response.json();
			dispatch(updateRedditReturn(json));
		}
		fetchApi();
	}, [dispatch, userSearchTerm]);

	return  ( 
		<div>
			<></>
		</div>
	);
};

export default Reddit;
