import React from "react";
import "./styles.css";

const Video = (props) => {
  return (
    <iframe title="Ingreso al administrador" width="100%" height="315" src={`https://www.youtube.com/embed/${props.video.id}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  );
}

export default Video;
