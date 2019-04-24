import { action } from "typesafe-actions";

// use typescript enum rather than action constants
export enum actionTypes {
  UPDATE_UID = "UPDATE_UID",
  UPDATE_USERNAME = "UPDATE_USERNAME",
  UPDATE_PASSWORD = "UPDATE_PASSWORD",
  UPDATE_STATUS = "UPDATE_STATUS",
  TYPING_WORD = "TYPING_WORD",
  MATCH_WORD = "MATCH_WORD",
  UPDATE_SCORE = "UPDATE_SCORE"
}

export const gameActions = {
  updateUid: (entry: string) => action(actionTypes.UPDATE_UID, entry),
  updateUsername: (entry: string) => action(actionTypes.UPDATE_USERNAME, entry),
  updatePassword: (entry: string) => action(actionTypes.UPDATE_PASSWORD, entry),
  updateStatus: (entry: boolean) => action(actionTypes.UPDATE_STATUS, entry),
  typingWord: (entry: string) => action(actionTypes.TYPING_WORD, entry),
  matchWord: (entry: string) => action(actionTypes.MATCH_WORD, entry), //unsure about entry type
  updateScore: (score: number) => action(actionTypes.UPDATE_SCORE, score)
};