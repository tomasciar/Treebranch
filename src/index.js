import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import LandingPage from "./components/LandingPage";
import HomePage from "./components/Homepage";

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
