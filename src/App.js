import React, { useState, useEffect } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import Header from './components/header';
import Button from './components/nav';
import Panel from './components/nav/panel';
import { Customer, Date, List } from './List';
import Iframe from './components/iframe';

import './styles.css';

library.add(faPlus);

export default function App() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(List[0].Link);

  useEffect(() => {
    setOpen(false);
  }, [active]);

  return (
    <div className="App">
      <Header />
      <Panel open={open} links={List} setActive={setActive} />
      <Button open={open} setOpen={setOpen} />

      <div className="container title mt-5 mb5">
        <h3>{Customer}</h3>
        <p>{Date}</p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Iframe active={active} />
          </div>
        </div>
      </div>
    </div>
  );
}
