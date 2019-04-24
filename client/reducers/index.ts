import { combineReducers } from 'redux';
import reducer from './reducers';

export default combineReducers({
    game: reducer,
});