import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
ReactDOM.render( //método obrigatório, pois ele que vai renderizar, montar a tela completa
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root") as HTMLElement
);
