import React from 'react';
import './styles.css';

const Video = props => {
  return (
    <iframe
      title="Ingreso al administrador"
      width="100%"
      height="315"
      src={`https://www.youtube.com/embed/${props.video.id}?rel=0&autoplay=1`}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
};

export default Video;
