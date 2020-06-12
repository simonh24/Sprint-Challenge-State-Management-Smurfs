import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import thunk from "redux-thunk";
import { listReducer } from "./reducers"

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

const store = createStore(listReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById("root"));
