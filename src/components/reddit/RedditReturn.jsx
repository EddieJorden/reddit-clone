import { useSelector } from "react-redux";
import { selectRedditReturn } from "./RedditSlice";
import Reddit from "./Reddit";

const RedditReturn = () => {
    const redditReturn = useSelector(selectRedditReturn);
    return (
        <div>
            <div>
                <Reddit />
            </div>
            <div>
                <div>reddit return: </div>
                <div>{redditReturn.kind}</div>
            </div>
        </div>
    );
};

export default RedditReturn;