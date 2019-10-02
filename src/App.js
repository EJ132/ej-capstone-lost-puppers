import React from 'react';
import './Stylesheets/App.css';
import Navbar from './Components/Navbar'
import Home from './Components/Main'
import {Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Home}/>
    </div>
  );
}

export default App;
