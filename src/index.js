import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import store from "./redux/store";

ReactDOM.render(
    // inject store into children of App by Provider
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
