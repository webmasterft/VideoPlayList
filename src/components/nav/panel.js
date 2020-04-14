import React from 'react';
import Links from './links';
import './nav.css';

const Panel = props => {
  return (
    <div
      className={props.open ? 'menu-wrapper menu-open' : 'menu-wrapper'}
    >
      <Links links={props.links} open={props.open} setActive={props.setActive} />
    </div>
  );
};

export default Panel;
