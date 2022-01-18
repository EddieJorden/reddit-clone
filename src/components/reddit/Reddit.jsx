import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateRedditReturn } from "./RedditSlice";

const Reddit = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        async function fetchApi () {
            const subreddit = 'meme';
            const limit = 10;
            const response = await fetch(`https://www.reddit.com/r/${subreddit}.json?limit=${limit}`, {'type' : 'no-cors'});
            const json = await response.json();
            dispatch(updateRedditReturn(json));
        };
        fetchApi();
    }, [dispatch]);

    return (
        <div>
            <></>
        </div>
    )
};

export default Reddit;