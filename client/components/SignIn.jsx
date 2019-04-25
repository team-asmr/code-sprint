import * as React from "react";
import Axios from 'axios';

// interface SignInProps {
//   updateUsername: any,
//   updatePassword: any,
//   updateUid: any,
//   updateStatus: any
// }

const SignIn = (props) => {

  const handleUsernameChange = (input) => {
    props.setState({
      ...props.state,
      playerUsername: input
    })
  }

  const handlePasswordChange = (input) => {
    props.setState({
      ...props.state,
      playerPassword: input
    })
  }

  return (
    <div className="signIn">
      <h1>Sign In</h1>
      <form>
        <input type='text' name='username' placeholder='username' onChange={(e) => handleUsernameChange(e.target.value)} />
        <input type='password' name='password' placeholder='password' onChange={(e) => handlePasswordChange(e.target.value)} />
        <input type='submit' name='signIn' onClick={(e) => {
          e.preventDefault();
          Axios.post('/login', {username: props.state.playerUsername, password: props.state.playerPassword})
            .then((resp)=> {
              console.log('resp after signIn', resp);
              props.setState({playerUsername: resp.data.name, playerUid: resp.data.id, isLoggedIn: true})
            })
            .catch(err => console.log(err))
        }} />
      </form>
    </div>
  )
}

export default SignIn;