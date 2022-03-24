import { useSelector } from "react-redux";
import { selectUserInput } from "./searchBarSlice";

const SearchBarReturn = () => {
    const userInput = useSelector(selectUserInput);

    return (
        <div>
            <div>user input: </div>
            <div>{userInput}</div>
        </div>
    )
}

export default SearchBarReturn;
