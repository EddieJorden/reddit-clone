import { updateUserInput } from './searchBarSlice';
import { useDispatch, useSelector } from "react-redux";
import { updateSearchTerm } from "../reddit/RedditSlice";
import { selectUserInput } from "./searchBarSlice";

const SearchBar = () => {
    const dispatch = useDispatch()
    const userInput = useSelector(selectUserInput)

    const handleChange = (e) => {
        dispatch(updateUserInput(e.target.value))
    }

    const handleSubmit = (e) => {
        dispatch(updateSearchTerm(userInput));
        // console.log('e.target.value', e.target.value);
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder='search' type='text' onChange={handleChange}/>
                <input type="submit" value="hit api" />
            </form>
        </div>
    );
};

export default SearchBar;
