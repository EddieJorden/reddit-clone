const ChildObject = ({ author, url, altTxt }) => {
    return (
        <div>
            <div>author: {author}</div>
            <div>{!url ? "" : <img src={url} alt={altTxt} style={{maxWidth: '61.8vw', maxHeight: '100vh'}}/>}</div>
        </div>
    );
};

export default ChildObject;