import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const Play = props => {
  const [ snippet, setSnippet ] = useState('');
  const [ pending, setPending ] = useState(snippet);
  const [ correct, setCorrect ] = useState('');
  const [ incorrect, setIncorrect ] = useState('');
  const [ typed, setTyped ] = useState('');

  let ref;

  useEffect(()=>{
    fetchRandomSnippet();
    ref.focus();
  }, [])

  const fetchRandomSnippet = () => {
    Axios.get('/snippet')
      .then(result => {
        const randomSnippet = result.data[Math.floor(Math.random(0,1)*result.data.length)].content;
        setSnippet(randomSnippet);
        setPending(randomSnippet);
      })
      .catch(err => console.log(err));
  }
  
  const handleKeyPress = e => {
    // console.log(e.key);
    let char = e.key === 'Enter' ? '\n': e.key;
    if (char === pending[0] && !incorrect) {
      setCorrect(correct + pending[0]);
    } else {
      setIncorrect(incorrect + (pending[0] || ''));
    }

    if (pending) setPending(pending.slice(1));
    setTyped(typed + char);

    if (typed+char === snippet) {
      ref.blur();
    }
    
  }

  const handleKeyDown = e => {
    // console.log(e.key);
    if (e.key === 'Backspace' && (correct || incorrect)) {
      if (typed.length <= snippet.length) {
        if (incorrect) {
          setPending(incorrect[incorrect.length-1] + pending);
          setIncorrect(incorrect.slice(0, incorrect.length-1));
        } else {
          setPending(correct[correct.length-1] + pending);
          setCorrect(correct.slice(0, correct.length-1));
        }
      }
      setTyped(typed.slice(0, typed.length-1));
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
      <h2>Let's Play.</h2>
      <div className="snippet">
        <p>Prompt:</p>
        <pre>
          <span className="correct">{correct}</span>
          <span className="incorrect">{incorrect}</span>
          <span className="current">{pending[0]}</span>
          <span className="pending">{pending.slice(1)}</span>
        </pre>
        <p>You:</p>
        <pre>
          <span className="typed">{typed}</span>
          <span className="current"> </span>
        </pre>
      </div>
    </div>
  )
}

export default Play;