import React, { useState } from 'react';
import './styles.css';
import VideoListView from './videoListView';
import { videoList } from './videosList';
import Video from './video';

export default function App() {
  const [currentVideo, setCurrent] = useState(0);
  return (
    <div className="App container mb-5 mt-5">
      <div className="row">
        <h1 className="mb-5"> Manual de administración sitio web ASOPREOL</h1>
        <div className="col-md-6">
          <VideoListView
            currentVideo={currentVideo}
            videoList={videoList}
            setCurrent={setCurrent}
          />
        </div>
        <div className="col-md-6">
          <Video video={videoList[currentVideo]} />
        </div>
      </div>
    </div>
  );
}
