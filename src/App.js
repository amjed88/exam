import react, { component, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import Nav from './component/Nav';
import amj from './amj.jpg';
import popular from './component/Popular';
import Home from './component/home';
import Menu from './component/Menu';
import About from './component/About';
import Contact from './component/contact';



function App() {

  return (
    <BrowserRouter>
      <div >
        <Nav />
        <Route path="/" exact component={Home}></Route>
        <Route path="/popular" component={popular}></Route>
        <Route path="/menu" component={Menu}></Route>
        <Route path="/About Us" component={About}></Route>
        <Route path="/Contact Us" component={Contact}></Route>
      </div>
    </BrowserRouter>

  );

}

export default App;
