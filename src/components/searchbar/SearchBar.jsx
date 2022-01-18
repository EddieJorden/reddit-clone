// import { useState } from "react";
import { debounce } from "lodash";
import { updateUserInput } from './searchBarSlice';
import { useDispatch } from "react-redux";

const SearchBar = () => {
    const dispatch = useDispatch();
    const handleChange = (event) => {
        dispatch(updateUserInput(event.target.value));
    };

    return (
        <div>
            <input placeholder='search' type='text' onChange={debounce(handleChange, 1000)}/>
        </div>
    );
};

export default SearchBar;