import React, { Fragment } from 'react';
import './nav.css';

const Links = props => {
  const linkList = props.links.map((link, index) => {
    return (
      <Fragment>
        <span
          key={index}
          className="link"
          onClick={() => props.setActive(link.Link)}
        >
          {link.Name}
        </span>

        <div className="submenu">
          {link.Subreports &&
            link.Subreports.map((link, index) => {
              return (
                <span
                  key={index}
                  className="sublink"
                  onClick={() => props.setActive(link.Link)}
                >
                  {link.Name}
                </span>
              );
            })}
        </div>
      </Fragment>
    );
  });

  return (
    <div
      className={
        props.open ? 'links-wrapper' : 'links-wrapper links-wrapper-closed'
      }
    >
      {' '}
      <ul className="link-list">{linkList}</ul>
    </div>
  );
};

export default Links;
