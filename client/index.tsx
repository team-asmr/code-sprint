import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import App from './App';

ReactDOM.render(
  // <Provider store={store}>
    <App />,
  // </Provider>
  document.getElementById('app') as HTMLElement
);