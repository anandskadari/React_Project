import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Login from './screens/login/Login';
import Home from './screens/home/Home';
import Profile from './screens/profile/Profile';
import Controller from './screens/Controller';
import Header from './common/Header/Header';
import 'typeface-roboto';
import {BrowserRouter as Router,Route} from 'react-router-dom';


ReactDOM.render(
  <Router>
                   <div className="main-container">
                  
                    <Route exact path="/" render={(props)=> <Login {...props}/>}/>
                   <Route exact path="/home" render={(props)=> <Home {...props}/>}/>
                    <Route exact path="/profile" render={(props)=> <Profile {...props} baseUrl="https://api.instagram.com/v1/users/self/"/>}/>
                </div>
            
  
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
