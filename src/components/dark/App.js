import React from 'react';
import DarkModeToggle from './DarkModeToggle';
import Content from './Content';

import './styles.css';

function App() {
  return (
    <>
      <div className="navbar">
        <DarkModeToggle />
      </div>
      <Content />
    </>
  );
}

export default App;
