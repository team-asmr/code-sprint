import * as React from 'react'
import Axios from 'axios';

const Play = (props) => {

  let [snippets, updateSnippets] = React.useState([]);

  React.useEffect(() => {
    const fetchSnippets = async () => {
      const result = await Axios.get('/snippet')
      updateSnippets(result.data);
    }
    fetchSnippets();
  }, [])

  return (
    <div className="play">
      <h1>Snippets</h1>
      <div className="snippets">
        {snippets.map((el, idx) => {
          return (
            <div key={idx}>
              <h3>Name: {el.name}</h3>
              <div>Content: {el.content}</div>
            </div>
          )
        })}
      </div>
      <h1>Player 1</h1>
        <input type="text"/>
      <h1>Player 2</h1> 
        <input type="text"/>
    </div>
  )
}

export default Play;