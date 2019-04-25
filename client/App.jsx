import React, { useState } from 'react';

import Play from './components/Play.jsx';
import SignIn from './components/SignIn.jsx';

import './styles.css';

const App = (props) => {
  const [state, setState] = React.useState({
    playerUsername: '',
    playerPassword: '',
    playerUid: '',
    playerTypingWord: '',
    playerScore: '',
    playerMatchWord: '',
    playerStatus: '',
    typeSet: '',
    isLoggedIn: false
  }) 

    return (
      <div className='app'>
        <Play setState={setState} />
        {/* {state.isLoggedIn ? <Play setState={setState} /> : <SignIn state={state} setState={setState}/>} */}
      </div>
    )
}

export default App;