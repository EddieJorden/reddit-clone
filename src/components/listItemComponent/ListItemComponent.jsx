import { useSelector } from "react-redux";
import { selectRedditReturn } from '../reddit/RedditSlice'

const ListItemComponent = (props) => {
    const redditApiReturn = useSelector(selectRedditReturn);
    console.log('redditApiReturn', redditApiReturn)

    if(!redditApiReturn.data) {
        console.log('api return is not true')
        return <div>reddit is loading...</div>
    } else 
        return (
            <div>
                {
                    redditApiReturn.data.children.map((each, index)=> {
                        return (
                            <div key={index}>
                                <div style={{width: '1000px', height: '100px', backgroundColor: 'white', margin: '10px', key: '{generatedKey}'}}>
                                    <div style={{display: 'flex', color: 'black'}}>
                                        <img src={each.data.thumbnail} alt={each.data.title} style={{maxHeight: '100px', maxWidth: '100px'}}/>
                                        <div>
                                            <h6 >{each.data.title}</h6>
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
