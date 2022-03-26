import { useSelector } from "react-redux";
import { selectRedditReturn } from '../reddit/RedditSlice'

const ListItemComponent = () => {
    const redditApiReturn = useSelector(selectRedditReturn);
    console.log('redditApiReturn', redditApiReturn)

    if(!redditApiReturn.data) {
        console.log('api return.data is not true', redditApiReturn.data)
        return <div>reddit is loading...</div>
    } else 
        return (
            <div>
                {console.log('redditApiReturn.data', redditApiReturn.data)}
                {
                    redditApiReturn.data.children.map((each, index) => {
                        const { 
                            // created,
                            // author,
                            // ups,
                            title,
                            thumbnail,
                            // permalink 
                        } = each.data;
                        return (
                            <div key={index}>
                                <div style={{width: '1000px', height: '100px', backgroundColor: 'white', margin: '10px', key: '{generatedKey}'}}>
                                    <div style={{display: 'flex', color: 'black'}}>
                                        <img src={thumbnail} alt={title} style={{maxHeight: '100px', maxWidth: '100px'}}/>
                                        <div>
                                            <h6 >{title}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
};

export default ListItemComponent;
