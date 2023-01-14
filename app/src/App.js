import "./App.css";
import Home from "./pages/Home";
import Forum from "./pages/Forum";
import {
  Routes,
  Route,
  Router,
  Redirect,
  RouterProvider,
} from "react-router-dom";
import React, { Component } from "react";

function App() {
  return (
    <div className="App">
      <Forum />
    </div>
  );
}

export default App;
