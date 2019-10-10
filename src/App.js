import React from 'react';
import './Stylesheets/App.css';
import Navbar from './Components/Navbar'
import Home from './Components/Main'
import AboutUs from './Components/AboutUs'
import Find from './Components/Find'
import Login from './Components/Login'
import {Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Home}/>
      <Route exact path='/aboutus' component={AboutUs}/>
      <Route exact path='/find' component={Find}/>
      <Route exact path='/login' component={Login}/>
    </div>
  );
}

export default App;
