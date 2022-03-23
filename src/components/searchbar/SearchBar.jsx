// import { useState } from "react";
import { debounce } from "lodash";
import { updateUserInput } from './searchBarSlice';
import { useDispatch, useSelector } from "react-redux";
import { selectRedditReturn } from "../reddit/RedditSlice";

const SearchBar = () => {
    const dispatch = useDispatch();
    const redditReturnedFromClick = useSelector(selectRedditReturn)
    const handleChange = (event) => {
        dispatch(updateUserInput(event.target.value));
    };

    const handleClick = () => {
        console.log(redditReturnedFromClick)

    }

    return (
        <div>
            <input placeholder='search' type='text' onChange={debounce(handleChange, 1000)}/>
            <button onClick={handleClick}>hit api</button>
        </div>
    );
};

export default SearchBar;