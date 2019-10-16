import React from 'react';
import './Stylesheets/App.css';
import Home from './Components/Main'
import AboutUs from './Components/AboutUs'
import Find from './Components/Find'
import Login from './Components/Login'
import Register from './Components/Register'
import Profile from './Components/Logged_In/Profile'
import pupPage from './Components/LostDogs/pupPage'
import {Route, Router} from 'react-router-dom';
import PrivateRoute from './Components/Utils/PrivateRoute'
import PublicOnlyRoute from './Components/Utils/PublicOnlyRoute'
import history from './Context/history'

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Route exact path='/' component={Home}/>
        <Route exact path='/aboutus' component={AboutUs}/>
        <Route exact path='/find' component={Find}/>
        <PublicOnlyRoute path='/login' component={Login}/>
        <PublicOnlyRoute exact path='/register' component={Register} />
        <PrivateRoute path='/profile' component={Profile}/>
        <PrivateRoute exact path ='/find/:id' component={pupPage}/>
      </Router>
    </div>
  );
}

export default App;
