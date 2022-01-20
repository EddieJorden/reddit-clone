import { useSelector } from "react-redux";
import { selectRedditReturn } from "./RedditSlice";
import Reddit from "./Reddit";
import Tile from "./Tile";

const RedditReturn = () => {
    let returnedArray = useSelector(selectRedditReturn);
    const redditReturn = () => {
        if(!returnedArray) {
            return ;
        }
        const removeFirstTwo = returnedArray.slice(2);
        return removeFirstTwo;
    };
    const arrayMinusFirstTwo = redditReturn();
    const mappedReturn = () => {
        if(!arrayMinusFirstTwo) {
            return ;
        } 
        return arrayMinusFirstTwo.map((each, i) => {
            let uniqueKey = i;
            console.log('uniqueKey', uniqueKey);
            let author = each.data.author;
            let url = each.data.url;
            let altTxt = each.data.title;
            return (
                <Tile author={author} url={url} altTxt={altTxt} key={uniqueKey}/>
            );
        });
    };
    return (
        <div>
            <div>
                <Reddit />
            </div>
            <div>
                <div>reddit return: </div>
                <div>{mappedReturn()}</div>
            </div>
        </div>
    );
};

export default RedditReturn;