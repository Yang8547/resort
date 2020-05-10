import React from 'react';
import "./App.css";

import {
  Switch,
  Route
} from "react-router-dom";

import Home from './components/Home';
import Rooms from './components/Rooms';
import SingleRoom from './components/SingleRoom';
import ErrorPage from './components/ErroPage';

import Navbar from './components/Navbar'

function App() {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/rooms' component={Rooms} />
      <Route exact path='/rooms/:slug' component={SingleRoom} />
      <Route component={ErrorPage} />
    </Switch>
    </>
    
  );
}

export default App;
