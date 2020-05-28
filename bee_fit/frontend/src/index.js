import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { Provider as AlertProvider } from "react-alert";

import AlertTemplate from "react-alert-template-basic";

import store from "./store";
import history from "./utils/historyUtils";
import { authLogin } from "./actions/authActions";
import App from "./components/App";

const alertOptions = {
    timeout: 3000,
    position: "top center",
  };
  

const token = localStorage.getItem("token");

if (token) {
    store.dispatch(authLogin(token));
}

ReactDOM.render(
    <Provider store={store}>
        <AlertProvider> 
        <Router history={history}>
            <App />
        </Router>
        </AlertProvider>
    </Provider>
    , document.getElementById("app"));