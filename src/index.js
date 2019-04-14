import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import {Provider} from "react-redux";

const app = (
    <Provider>
        <App/>
    </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
registerServiceWorker();
