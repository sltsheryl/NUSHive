import "./App.css";
import Home from "./pages/Home";
import Forum from "./pages/Forum";
import { Routes, Route, Router, Redirect, RouterProvider } from 'react-router-dom';
import React, { Component } from 'react';


function App() {
  return (

    // <Route path="/" component={ () => <Home check_logged_in = {this.check_logged_in} logged_in = {this.state.logged_in}/> } exact/>
    <div className="App">
      <Forum />

    </div>
  )
}

export default App;
