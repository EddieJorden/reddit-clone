import { updateUserInput } from './searchBarSlice';
import { useDispatch, useSelector } from 'react-redux';
import { updateSearchTerm } from '../reddit/RedditSlice';
import { selectUserInput } from './searchBarSlice';
import React from 'react';

const SearchBar = () => {
	const dispatch = useDispatch();
	const userInput = useSelector(selectUserInput);

	const handleChange = (e) => {
		dispatch(updateUserInput(e.target.value));
	};

	const handleSubmit = (e) => {
		dispatch(updateSearchTerm(userInput));
		e.preventDefault();
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input placeholder='search' type='text' onChange={handleChange}/>
				<input type="submit" disabled={!userInput} value="search" />
			</form>
		</div>
	);
};

export default SearchBar;
