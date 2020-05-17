import React,{Component} from 'react';
import './Header.css';
import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import Fade from '@material-ui/core/Fade';
import { Redirect } from "react-router";
import { Link } from 'react-router-dom';

class Header extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            anchorEl:null,
            open:false,
            logoutFlag:false,
            profileFlag:false,
searchvalue:''
         }
         this.handleChange = this.handleChange.bind(this);
         this.handleClick = this.handleClick.bind(this);
         this.handleClose = this.handleClose.bind(this);
    }

    imageClickHandler=(props)=>
    {
        console.log(props);
    }

    handleChange(event) {
        this.setState({searchvalue: event.target.value},()=>{
            console.log("Clicked OnChnage Bharath");
            console.log(this.state.searchvalue)
            this.sendData()
        });
      }
    handleClick=(event)=>
    {
        this.setState({anchorEl:event.currentTarget,open:true});
    }
    handleClose=()=>
    {
       this.setState({anchorEl:null,open:false},()=>{console.log("clicked handle close");});
    }
    handleProfile=()=>
    {
        this.setState({anchorEl:null,profileFlag:true},()=>{
            console.log("clicked handleClose");
        });
    }
    handleLogout=()=>
    {
        this.setState({anchorEl:null,logoutFlag:true},()=>{
            console.log("clicked handleLogout");
        });
    }
    sendData = () => {
        this.props.parentCallback(this.state.searchvalue);
   }
    render(){
        if(this.state.logoutFlag===true)
        {
            return(
                <Redirect to="/"/>
            )
        }
        if(this.state.profileFlag===true)
        {
            return(
                <Redirect to ="/profile"/>
            )
        }
        
    return( 
    <header className="app-header">
        <div className="app-logo">
          {console.log(this.props.screen)  }
        {(this.props.screen==="Home" || this.props.screen==="Login") && <span className="header-logo">Image Viewer</span>}
            {(this.props.screen === "Profile") && <Link style={{ textDecoration: 'none', color: 'white' }} to="/home"><span className="header-logo">Image Viewer</span></Link>}
        </div>
        {this.props.showProfilePic==="true" ?
        <div className="profile-pic">
            <IconButton size="small" aria-controls="fade-menu" aria-haspopup="true" onClick={this.handleClick}>
                <img className="profile-icon" src={this.props.pictureUrl}/>
           </IconButton>
           <Menu
           id="fade-menu"
           anchorEl={this.state.anchorEl}
           keepMounted
           open={this.state.open}
           onClose={this.handleClose}
           TransitionComponent={Fade}  >
               {this.props.myAccount==="true" ?
        <MenuItem onClick={this.handleProfile}>My account</MenuItem>:""}
        <hr style={{width:'70%',marginLeft: 'auto',
         marginRight: 'auto'}}/>
        <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
           </Menu>

        </div>:""}
        {this.props.showSearchBox==="true" ?
        <div className="search-container">
        <div className="button-container">
            <SearchIcon/>
            </div>
            <FormControl>
                <Input disableUnderline={true} type="text" placeholder="Search..." name="search" value={this.state.searchvalue} onChange={this.handleChange}/>
            </FormControl>
        </div>: ""}
    </header>);
    }
}

export default Header;