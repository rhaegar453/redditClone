import React from 'react';
import Post from '../Components/Post';



export default { title: "Post" };

const onPostOpen = (data) => {
    console.log(data)
}


export const withImage = () => {
    return <div className="col-md-6">
        <Post authorName="Shivaraj Bakale" createdat="18 Hours ago"
            title="Hey there this is my First Video on Cats. Hamara Bajaj"
            upvotes="4.5K"
            mediaURL="https://v.redd.it/qehlocuh9n941/DASH_480?source=fallback"
            url="http://facebook.com"
            linkFlair="Cats Picture"
            upvotes="3.5K"
            comments="2K"
            isVideo={true}
        />
        <Post authorName="Shivaraj Bakale" createdat="18 Hours ago"
            title="Hey there this is my First Post on Cats. Hey there"
            upvotes="4.5K"
            mediaURL="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            url="http://facebook.com"
            linkFlair="Cats Picture"
            upvotes="3.5K"
            comments="2K"
            onMediaClick={onPostOpen}
            isImage={true}
        />
    </div>
}
