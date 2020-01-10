export const structureData=(arr)=>{
    return arr.map(item=>item.data).map(item=>{
        return {
            id:item.id, 
            authorName:item.author_fullname, 
            title:item.title,
            upvotes:item.ups, 
            linkFlair:item.link_flair_text, 
            createdat:item.created, 
            url:item.url, 
            comments:item.num_comments, 
            isVideo:item.is_video,
            isImage:!item.is_video?true:false, 
            imageURL:item.thumbnail,
            videoURL:item.is_video?item.media.reddit_video.fallback_url:null,
            isFavorite:false
        }
    });
}