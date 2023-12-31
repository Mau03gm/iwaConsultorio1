import React from "react";
import ReactDOM from "react-dom/client";
import "./Css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { AppContext } from "./Context/AppContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppContext>
        <App />
      </AppContext>
    </BrowserRouter>
  </React.StrictMode>
);
