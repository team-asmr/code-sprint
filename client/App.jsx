import React, { useState } from 'react';

import Play from './components/Play.jsx';
import Login from './components/Login.jsx';

import './styles.css';

const App = (props) => {
  const [display, setDisplay] = useState(2);
  const [user, setUser] = useState(null);

  switch (display) {
    case 0:
      return (
        <div>
          <Login {...{user, setUser}} />
        </div>
      )
    case 1:
      
    case 2:
      return (
        <div>
          <Play />
        </div>
      )
    default:
      return null;
  }
  
}

export default App;