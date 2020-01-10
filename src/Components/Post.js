import React from 'react';
import './Post.css';


const Post = ({ id, isVideo, isImage, authorName, createdat, title, linkFlair, url, upvotes, imageURL, videoURL, comments, onMediaClick, isFavorite, toggleFavorite }) => {
    return (
        <div>
            <div style={{ float: 'right', marginTop: "5px", marginRight: "5px" }}>
                {isFavorite ? <button className="btn btn-success" onClick={() => toggleFavorite('removeFavorite', id)} ><i className="fa fa-bookmark"></i></button> : <button className="btn btn-danger" onClick={() => toggleFavorite('makeFavorite', id)}><i className="fa fa-bookmark"></i></button>}
            </div>
            <div className="postBackground postCss">
                <p className="infoText">Posted by {authorName} {createdat}</p>
                <h3 className="titleText">{title} <span className="badge badge-primary linkFlairText">{linkFlair}</span></h3>
                {url ? <a className="linkText" href={url}>{url}</a> : null}
                {(imageURL || videoURL) ? <div className="centeredCss">
                    <div>
                        {isImage && imageURL !== 'self' ? <div style={{ position: 'relative' }}>
                            <img src={imageURL} style={{ borderRadius: "12px", width: "300px" }}></img>
                            <div className="centerButtonAbsolute">
                                <button className="btn btn-outline-danger btn-sm buttonOpenImage" onClick={() => onMediaClick(imageURL)}>Open Full Image</button>
                            </div>
                        </div> : null}
                        {isVideo ? <div style={{ position: 'relative' }}>
                            <video width={"300px"} style={{ borderRadius: "12px", outline: 'none' }} controls>
                                <source src={videoURL} type="video/mp4"></source>
                            </video>
                        </div> : null}
                    </div>

                </div> : null}
                <div className="spaceAroundCss fontSizing10" style={{ marginTop: "10px" }}>
                    <div>
                        <i className="fa fa-comment icon" style={{ color: 'white' }}></i>{comments}
                    </div>
                    <div>
                        <i className="fa fa-arrow-up icon"></i>{upvotes}
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Post;