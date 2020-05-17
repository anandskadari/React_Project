import React,{Component} from 'react';
import './Login.css'
import Header from '../../common/Header/Header';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';
import {username,password} from '../../assets/loginData';
import { Redirect } from "react-router";

class Login extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            username:"",
            password:"",
            usernameRequired:"dispNone",
            passwordRequired:"dispNone",
            incorrectUsernameOrPassword:"dispNone",
            isLoggedIn:false
         }
}

loginClickHandler=()=>
{
    this.state.username==="" ? this.setState({usernameRequired:"dispBlock"}) :this.setState({usernameRequired:"dispNone"});
   this.state.password==="" ? this.setState({passwordRequired:"dispBlock"}) :this.setState({passwordRequired:"dispNone"});
    
    if((this.state.username===username)&&(this.state.password===password))
    {
        console.log("Correct");
        sessionStorage.setItem('session_key', "Bharath");
        this.setState({isLoggedIn:true});
     } 

    else
    {
        //this.setState({incorrectUsernameOrPassword:"dispBlock"});
       if( this.state.username.length>0 && this.state.password.length>0){
      this.setState({incorrectUsernameOrPassword:"dispBlock"})
       }
    }
   
}

inputUsernameChangeHandler=(e)=>
{
    this.setState({username:e.target.value})
}

inputPasswordChangeHandler=(e)=>
{
    this.setState({password:e.target.value})
}

render()
{
     if(this.state.isLoggedIn===true)
    {
        return (
            
            <Redirect to="/home"/>
           
            )
    }
  return(
       <div>
       <Header screen="Login"/> 
       <Card style={{minWidth:'340px',maxWidth:'240px',margin:'auto',marginTop:'12px',paddingLeft:'30px'}}>
           <CardContent>
            <FormControl>
                <Typography style={{marginBottom:'10px'}}>
                    LOGIN
                 </Typography>
            </FormControl>
                     <br/>
            <FormControl required>
                   <InputLabel htmlFor="username">Username</InputLabel>
                   <Input style={{width:'220px'}}type="text" id="username" username={this.state.username} onChange={this.inputUsernameChangeHandler}/>
                   <FormHelperText className={this.state.usernameRequired}><span className="red">required</span></FormHelperText>
            </FormControl>
                    <br/><br/>
            <FormControl required> 
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <Input style={{width:'220px'}} type="password" password={this.state.password} id="password" onChange={this.inputPasswordChangeHandler}/>
                  <FormHelperText className={this.state.passwordRequired}><span className="red">required</span></FormHelperText>
                  <br/>
            </FormControl>
               <br/>
              <br/>
              <FormHelperText className={this.state.incorrectUsernameOrPassword}><span className="red">Incorrect Username and/or Password</span></FormHelperText>
              <Button className="btn" style={{marginTop:'20px'}} variant="contained" color="primary" onClick={this.loginClickHandler}>Login</Button>
           </CardContent>
     </Card>
    </div>
    );
    }
}
export default Login;