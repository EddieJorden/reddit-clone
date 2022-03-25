import { updateUserInput } from './searchBarSlice';
import { useDispatch, useSelector } from "react-redux";
import { updateSearchTerm } from "../reddit/RedditSlice";
import { selectUserInput } from "./searchBarSlice";
import React from 'react';

const SearchBar = () => {
    const dispatch = useDispatch();
    const userInput = useSelector(selectUserInput);
    const [value, setValue] = React.useState('');

    const handleChange = (e) => {
        dispatch(updateUserInput(e.target.value));
        if(e.target.value === "") {
            setValue(false);
        } else setValue(true)
    };

    const handleSubmit = (e) => {
        dispatch(updateSearchTerm(userInput));
        e.preventDefault();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder='search' type='text' onChange={handleChange}/>
                <input type="submit" disabled={!value} value="search" />
            </form>
        </div>
    );
};

export default SearchBar;
