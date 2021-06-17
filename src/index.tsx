import * as React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import Counter from "./counter/Counter";

ReactDOM.render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>,
  document.getElementById("test1")
);
