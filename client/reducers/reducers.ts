import { GameModel } from "./model";
import * as MyTypes from "MyTypes";
import { actionTypes } from "../actions/actions";
import { Types } from "typesafe-actions";

const initialState: GameModel = {
  playerUsername: "",
  playerPassword: "",
  playerUid: "",
  playerTypingWord: "",
  playerScore: 0,
  playerMatchWord: "",
  playerStatus: false,
  typeSet: [],
};

const reducer = (state: GameModel = initialState, action: MyTypes.RootAction) => {
    switch (action.type) {
      case "UPDATE_UID": {
        const uid = action.payload;
        return {
          ...state,
          playerUid: uid,
        }
      }
      case "UPDATE_USERNAME": {
        const username = action.payload
        return {
          ...state,
          playerUsername: username,
        }
      }
      case "UPDATE_PASSWORD": {
        const password = action.payload
        return {
          ...state,
          playerPassword: password
        }
      }
      case "UPDATE_STATUS": {
        const status = !action.payload
        return {
          ...state,
          playerStatus: status
        }
      }
      case "TYPING_WORD": {
        const typingWord = action.payload
        return {
          ...state,
          playerTypingWord: typingWord
        }
      }
      case "MATCH_WORD": {
        return {
          ...state,

        }
      }
      case "UPDATE_SCORE": {
        return {
          ...state,

        }
      }
      default:
        return state;
    }
};

export default reducer;