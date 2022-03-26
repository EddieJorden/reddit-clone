import Reddit from "./Reddit";
import ListItemComponent from "../listItemComponent/ListItemComponent";


const RedditReturn = () => {

    return (
        <div>
            <div>
                <Reddit />
            </div>
            <div>
                <div>reddit return: </div>
                <ListItemComponent />
            </div>
        </div>
    );
};

export default RedditReturn;