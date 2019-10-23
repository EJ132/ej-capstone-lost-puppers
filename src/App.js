import React from 'react';
import './App.css';
import Home from './Components/MainPage/Main'
import AboutUs from './Components/AboutUs/AboutUs'
import Find from './Components/LostDogs/Find'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Profile from './Components/Login/Profile'
import pupPage from './Components/LostDogs/pupPage'
import Create from './Components/Create/Create'
import Help from './Components/Help/Help'
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
        <Route exact path='/help' component={Help}/>
        <PublicOnlyRoute path='/login' component={Login}/>
        <PublicOnlyRoute exact path='/register' component={Register} />
        <PrivateRoute exact path ='/find/:id' component={pupPage}/>
        <PrivateRoute exact path ='/profile' component={Profile}/>
        <PrivateRoute exact path = '/create' component={Create}/>
      </Router>
    </div>
  );
}

export default App;
