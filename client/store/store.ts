import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

let middleware = applyMiddleware();

// if (process.env.NODE_ENV !== 'production') {
  middleware = composeWithDevTools(applyMiddleware(thunk))
// }

const store = createStore(rootReducer, middleware);

export default store;