import * as MyTypes from "MyTypes";
import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { gameActions } from "../actions";
import { SignIn } from "../components/SignIn"
import { render } from "react-dom";

const MapStateToProps = (store: MyTypes.ReducerState) => {
  return {
    name: store.game.playerUsername,
    password: store.game.playerPassword,
    uid: store.game.playerUid,
  }
};

const MapDispatchToProps = (dispatch: Dispatch<MyTypes.RootAction>) => {
  bindActionCreators(gameActions, dispatch);
};

interface AppProps {
  usernamename: string,
  password: string,
  uid: string,
}

class App:React.Component<AppProps> = (props) => {
  constructor(props: AppProps){
    super(props)
  }
  
  render(){
    return(
      <div className = "signIn">
        <SignIn />
      </div>
    )
  }
  
}


export default connect(
  MapStateToProps,
  MapDispatchToProps
)(App);