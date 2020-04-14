import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './nav.css';

const Button = props => {
  return (
    <button className={props.open 
      ? "menu-toggle close-button" 
      : "menu-toggle "}
      onClick={() => props.setOpen(!props.open)}
      >
      <FontAwesomeIcon icon="plus" />
    </button>
  );
};

export default Button;
