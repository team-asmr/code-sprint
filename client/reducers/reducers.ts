import { GameModel } from "./model";
import * as MyTypes from "MyTypes";
import { actionTypes } from "../actions/actions";
import { Types } from "typesafe-actions";

const initialState: GameModel = {
    players: [{
                "uid": "",
                isReady: false,
                "username": "",
                "password": "",
                "score": 0,
                "typingWord": "", 
              }, 
                {
                "uid": "",
                isReady: false,
                "username": "",
                "password": "",
                "score": 0,
                "typingWord": "",
              }],
    typeSet: [],
};

const reducer = (state: GameModel = initialState, action: MyTypes.RootAction) => {
    switch (action.type) {
      case "UPDATE_UID": {
        return {
          ...state,

        }
      }
      case "UPDATE_USERNAME": {
        const username = action.payload
        return {
          ...state,
          d
        }
      }
      case "UPDATE_PASSWORD": {
        return {
          ...state,

        }
      }
      case "UPDATE_STATUS": {
        return {
          ...state,

        }
      }
      case "TYPING_WORD": {
        return {
          ...state,

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