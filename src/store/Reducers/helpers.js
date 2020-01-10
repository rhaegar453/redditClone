export const structureData = (arr) => {
    return arr.map(item => item.data).map(item => {
        let isGIF = false;
        let gifURL = '';
        let isVideo = false;
        if (item.preview) {
            if (item.preview.reddit_video_preview) {
                if (item.preview.reddit_video_preview.is_gif) {
                    isGIF = true;
                    gifURL = item.preview.reddit_video_preview.fallback_url;
                }
            }
        }

        if (item.is_video) {
            isVideo = true;
        }

        if (isGIF) {
            return {
                id: item.id,
                authorName: item.author_fullname,
                title: item.title,
                upvotes: item.ups,
                linkFlair: item.link_flair_text,
                createdat: item.created,
                url: item.url,
                comments: item.num_comments,
                isVideo: true,
                isImage: false,
                imageURL: item.thumbnail,
                videoURL: gifURL,
                isFavorite: false,
                isGIF: true
            }
        }
        else if (isVideo) {
            return {
                id: item.id,
                authorName: item.author_fullname,
                title: item.title,
                upvotes: item.ups,
                linkFlair: item.link_flair_text,
                createdat: item.created,
                url: item.url,
                comments: item.num_comments,
                isVideo: true,
                isImage: false,
                imageURL: item.thumbnail,
                videoURL: item.item.media.reddit_video.fallback_url,
                isFavorite: false,
                isGIF: true
            }
        }
        else {
            return {
                id: item.id,
                authorName: item.author_fullname,
                title: item.title,
                upvotes: item.ups,
                linkFlair: item.link_flair_text,
                createdat: item.created,
                url: item.url,
                comments: item.num_comments,
                isVideo: false,
                isImage: true,
                imageURL: item.thumbnail,
                videoURL: null,
                isFavorite: false,
                isGIF: item.preview
            }
        }
    });
}