import React from "react";
import "./styles.css";

const VideoListView = props => {
  return (
    <ul className="list-group mb-5">
      {props.videoList.map((item, index) => {
        const active = props.currentVideo === index ? "active" : "";
        return (
          <button
            key={index}
            className={`list-group-item list-group-item-action ${active}`}
            href="/"
            onClick={() => props.setCurrent(index)}
          >
            {item.title}
          </button>
        );
      })}
    </ul>
  );
};

export default VideoListView;
