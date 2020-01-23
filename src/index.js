import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Homepage from "./Components/Homepage";
import Task from "./Components/task";
import Array from "./Components/Array";
import OddArray from "./Components/OddArray";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<OddArray />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
