import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    console.log(video);
    const imageUrl = video.snippet.thumbnails.default.url;

    return(
        <li className="list-group-item">
            <a href="#" onClick={() => onVideoSelect(video)} className="video-list media">
                <div className="media-left">
                    <img src={imageUrl} className="media-object" alt=""/>
                </div>
                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </a>
        </li>
    );
}

export default VideoListItem;