import React from 'react';
import './header.css';

const Header = props => {
  return (
    <div className="header">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <img
            className="logo"
            alt="Oshyn Logo"
            src="img/oshyn_logo_white.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
