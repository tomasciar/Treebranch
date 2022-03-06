import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import LandingPage from "./components/LandingPage";
import HomePage from "./components/HomePage";

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <HomePage />
  </React.StrictMode>,
  document.getElementById("root")
);
