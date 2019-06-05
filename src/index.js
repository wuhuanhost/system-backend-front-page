import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";

// 利用redux-logger打印日志
import { createLogger } from "redux-logger";

// 安装redux-devtools-extension的可视化工具。
import { composeWithDevTools } from "redux-devtools-extension";

// 使用日志打印方法， collapsed让action折叠，看着舒服。
const loggerMiddleware = createLogger({ collapsed: true });

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
