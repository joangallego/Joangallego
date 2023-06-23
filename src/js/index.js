
import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";


let counter = 0

setInterval(() => {
    ReactDOM.render(<SecondsCounter seconds={counter} />, document.querySelector("#app"));
    counter += 1;
}, 1000)

