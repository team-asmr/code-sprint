import React, { useState, useEffect } from 'react';

const Login = props => {
  return (
    <div>
      <h1>Code Sprint</h1>
      <h2>Log in.</h2>
      <form>
        <input className="input" type="text" placeholder="username"/>
        <input className="input" type="password" placeholder="password"/>
        <input className="input" type="submit"/>
      </form>
      
    </div>
  )
}

export default Login;