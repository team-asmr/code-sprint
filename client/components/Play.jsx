import React, { useState, useEffect } from 'react';

import snippet from './snippet';

const Play = props => {
  const [ pending, setPending ] = useState(snippet);
  const [ correct, setCorrect ] = useState('');
  const [ incorrect, setIncorrect ] = useState('');
  const [ removed, setRemoved ] = useState('');

  let ref;

  useEffect(()=>{
    ref.focus();
  }, [])
  
  const handleKeyPress = e => {
    // console.log(e.key);
    let char = e.key === 'Enter' ? '\n': e.key;
    if (pending) {
      setRemoved(removed + pending[0])
      setPending(pending.slice(1));
    }
    if (char === pending[0] && !incorrect) {
      setCorrect(correct + char);
    } else {
      setIncorrect(incorrect + char);
    }
    if (!pending && !incorrect) {
      ref.blur();
    }
  }

  const handleKeyDown = e => {
    // console.log(e.key);
    if (e.key === 'Backspace' && (correct || incorrect)) {
      
      if (pending) {
        setPending(removed[removed.length-1] + pending);
        setRemoved(removed.slice(0, removed.length-1));
      }
      if (incorrect) {
        setIncorrect(incorrect.slice(0, incorrect.length-1));
      } else {
        setCorrect(correct.slice(0, correct.length-1));
      }
    }

    if (e.key === 'Tab') {
      e.preventDefault();
    }
  }

  return (
    <div
      onKeyPress={handleKeyPress}
      onKeyDown={handleKeyDown}
      tabIndex="0"
      ref={c => ref = c}
    >
      <div className="snippet">
        <pre>
          <span className="correct">{correct}</span>
          <span className="incorrect">{incorrect}</span>
          <span className="pending">{pending}</span>
        </pre>
      </div>
    </div>
  )
}

export default Play;