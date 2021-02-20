import React from 'react';
import './Video.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


const Video = ({ image, title, channel, views, time, playlist }) => {
  return (
    <div className="video">
      <img src={image} className={playlist ? "playlist" : "thumbnail"} />
      <div className="videoInfo">
        <AccountCircleIcon className="profilePic" />
        <div className="videoText">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>{views} * {time}</p>
        </div>
      </div>
    </div>
  );
}

export default Video;