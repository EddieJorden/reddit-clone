import { useState } from "react";
import { debounce } from "lodash";

const SearchBar = () => {
    const [searchInput, setSeachInput] = useState('initial value');
    console.log('searchInput', searchInput);

    const handleChange = (event) => {
        setSeachInput(event.target.value);
    };

    return (
        <div>
            <div>
                <input placeholder='search' type='text' onChange={debounce(handleChange, 1000)}/>
            </div>
        </div>
    );
};

export default SearchBar;