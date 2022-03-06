import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Nav from "./components/Nav";
import LandingPage from "./components/LandingPage";

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <LandingPage />
  </React.StrictMode>,
  document.getElementById("root")
);
