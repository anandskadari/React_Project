import React ,{Component} from 'react';
import Login from '../screens/login/Login';
import Home from '../screens/home/Home';
import Profile from '../screens/profile/Profile';
import {BrowserRouter as Router,Route} from 'react-router-dom';

class Controller extends Component
{
    constructor()
    {
        super();
        this.baseUrl="https://api.instagram.com/v1/users/self/";
    }
    render()
    {
        return(
            <Router>
                <div className="main-container">
                   <Route exact path="/" component={Login}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/profile" component={Profile}/> 

                    {/* <Route exact path="/" render={(props)=> <Login {...props}/>}/>
                    <Route exact path="/Home" render={(props)=> <Home {...props} baseUrl={this.baseUrl}/>}/>
                    <Route exact path="/Profile" render={(props)=> <Profile {...props} baseUrl={this.baseUrl}/>}/> */}
                </div>
            </Router>
        )
    }
}
export default Controller ;