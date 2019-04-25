import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useInput } from './hooks';

const Login = props => {
  const [ username, usernameOnChange ] = useInput('');



  const handleLogIn = e => {
    e.preventDefault();
    Axios.post('/login', {username: props.state.playerUsername, password: props.state.playerPassword})
      .then((resp)=> {
        console.log('resp after signIn', resp);
        props.setState({playerUsername: resp.data.name, playerUid: resp.data.id, isLoggedIn: true})
      })
      .catch(err => console.log(err))
  }
  
  return (
    <div>
      <h1>Code Sprint</h1>
      <h2>Log in.</h2>
      <form onSubmit={handleLogIn}>
        <input className="input" type="text" placeholder="username"/>
        <input className="input" type="password" placeholder="password"/>
        <input className="input" type="submit"/>
      </form>
      
    </div>
  )
}

export default Login;