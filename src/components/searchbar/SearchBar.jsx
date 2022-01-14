import { useState } from "react";
import { debounce } from "lodash";

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState('initial value');
    console.log('searchInput', searchInput);

    const handleChange = (event) => {
        setSearchInput(event.target.value);
    };

    return (
        <div>
            <input placeholder='search' type='text' onChange={debounce(handleChange, 1000)}/>
        </div>
    );
};

export default SearchBar;