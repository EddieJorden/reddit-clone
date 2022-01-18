import { useSelector } from "react-redux";
import { selectRedditReturn } from "./RedditSlice";
import Reddit from "./Reddit";
import ChildObject from "./ChildObject";

const RedditReturn = () => {
    let returnedRedditArray = [];
    const returnedArray = useSelector(selectRedditReturn);
    const redditReturn = () => {
        if(!returnedArray) {
            return ;
        }
        for(let i = 2; i < returnedArray.length; i++) {
              returnedRedditArray.push(returnedArray[i]);
        }
        return returnedRedditArray;
    };

    const arrayMinusFirstTwo = redditReturn();
    console.log('arrayMinusFirstTwo', arrayMinusFirstTwo);

    const mappedReturn = () => {
        if(!arrayMinusFirstTwo) {
            return ;
        } 

        return arrayMinusFirstTwo.map(each => {
            let author = each.data.author;
            let url = each.data.url;
            let altTxt = each.data.title;
            return (
                <div>
                    <ChildObject author={author} url={url} altTxt={altTxt}/>
                </div>
            )
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