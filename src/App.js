import React, { useState } from "react";
import "./styles.css";
import VideoListView from "./videoListView";
import { videoList } from "./videosList";
import Video from "./video";

export default function App() {
  const [currentVideo, setCurrent] = useState(0);
  return (
    <div className="App container">
      <div className="row">
        <div className="col-md-6">
          <VideoListView currentVideo={currentVideo}
          videoList={videoList} setCurrent={setCurrent} />
        </div>
        <div className="col-md-6">
          <Video video={videoList[currentVideo]} />
        </div>
      </div>
    </div>
  );
}
