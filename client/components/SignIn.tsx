import * as React from "react";
import Axios from 'axios';

// interface SignInProps {
//   updateUsername: any,
//   updatePassword: any,
//   updateUid: any,
//   updateStatus: any
// }

const SignIn = (props) => {
  return (
    <div className="signin">
      <h1>Sign In</h1>
      <form>
        <input type='text' name='username' placeholder='username' onChange={(e) => props.updateUsername(e.target.value)} />
        <input type='password' name='password' placeholder='password' onChange={(e) => props.updatePassword(e.target.value)} />
        <input type='submit' name='signin' onClick={(e) => {
          e.preventDefault();
          Axios.post('/login', {username: 'yeet', password: 'yeet'})
            .then((resp)=> {
              console.log('resp after signin', resp);
              props.setState({playerUsername: resp.data.name, playerUid: resp.data.id})
            })
            .catch(err => console.log(err))
        }} />
      </form>
    </div>
  )
}

export default SignIn;