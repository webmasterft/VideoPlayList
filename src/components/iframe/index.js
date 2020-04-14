import React from 'react';

const Iframe = props => {
  return (
    <iframe
      title="Reports"
      width="100%"
      height="100%"
      src={`./reports/${props.active}`}
      frameBorder="0"
    />
  );
};

export default Iframe;
