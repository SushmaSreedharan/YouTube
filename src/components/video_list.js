import React from 'react';

const VideoList = (props) => {
    const videos = props.videos;
    return(
        <ul className="list-group"> {props.videos.length}</ul>
    );
}
export default VideoList;