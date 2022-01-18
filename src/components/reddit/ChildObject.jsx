const ChildObject = ({ author, url, altTxt }) => {
    return (
        <div>
            <div>author: {author}</div>
            <div>{!url ? "" : <img src={url} alt={altTxt} style={{maxWidth: '80vw'}}/>}</div>
        </div>
    )
}

export default ChildObject;