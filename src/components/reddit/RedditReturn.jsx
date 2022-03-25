import Reddit from "./Reddit";
import ListItemComponent from "../listItemComponent/ListItemComponent";


const RedditReturn = () => {
    const propsPassedIn = {
        // all_awardings: {coin_price: int, resized_icons: Array({url: string})},
        // created_utc: int,
        // author: string,
        // ups: int,
        // title: string,
        // thumbnail: string,
        // permalink: string,
    }

    return (
        <div>
            <div>
                <Reddit />
            </div>
            <div>
                <div>reddit return: </div>
                <ListItemComponent propsPassedIn={propsPassedIn}/>
            </div>
        </div>
    );
};

export default RedditReturn;