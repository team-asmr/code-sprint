import * as MyTypes from "MyTypes";
import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import SignIn from "./components/SignIn";
import Play from "./components/Play";
import { gameActions } from "./actions/actions";

// const MapStateToProps = (store) => ({
//   playerUsername: store.game.playerUserName,
//   playerPassword: store.game.playerPassword,
//   playerUid: store.game.playerUid,
//   playerTypingWord: store.game.playerTypingWord,
//   playerScore: store.game.playerScore,
//   playerMatchWord: store.game.playerMatchWord,
//   playerStatus: store.game.playerStatus,
//   typeSet: store.game.typeSet,
// })

// const MapDispatchToProps = (dispatch) => bindActionCreators(gameActions, dispatch);

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
        {state.isLoggedIn ? <Play setState={setState} /> : <SignIn state={state} setState={setState}/>}
      </div>
    )
}

// export default connect(MapStateToProps, MapDispatchToProps)(App);
export default App;