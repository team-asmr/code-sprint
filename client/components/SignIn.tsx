import * as React from "react";

interface SignInProps {
  players: {
    uid: string,
    isReady: boolean,
    username: string,
    password: string,
  }[],
  updateUsername: any,
  updatePassword: any,
  updateUid: any,
  updateStatus: any
}

export const SignIn = (props: SignInProps) => {
  return (
    <div className="signin">
      <form>
        <input type='text' name='username' placeholder='username' onChange={ (e) => props.updateUsername(e.target.value) }></input>
        <input type='password' name='password' placeholder='password' onChange={(e) => props.updatePassword(e.target.value)}></input>
        <input type='submit' name='singin' onClick={(e) => {
          e.preventDefault();
          props.updateUid();
          props.updateStatus();
        }}>sign in</input>
      </form>
    </div>
  )
}