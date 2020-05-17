import React,{Component} from 'react';
import './Home.css';
import Header from '../../common/Header/Header';
import axios from 'axios';
import CardInfo from './Card/CardInfo.js';
import Grid from '@material-ui/core/Grid';
import GridListTile from "@material-ui/core/GridListTile";
import GridList from "@material-ui/core/GridList";
import Box from "@material-ui/core/Box";
import { Redirect } from "react-router";

class Home extends Component
{
  constructor(props)
    {
        super(props);
        this.state={
          profile_picture:"",
          usersData:[],
          searchString:''
          }
    }
    callbackFunction = (childData) => {
      this.setState({searchString: childData})
}
 componentDidMount()
    {
      axios.get('https://api.instagram.com/v1/users/self/media/recent?access_token=8661035776.d0fcd39.39f63ab2f88d4f9c92b0862729ee2784').then((response)=>
      {
         this.setState({
         // profile_picture:response.data.data[0].user.profile_picture,
          usersData:response.data.data
        })
          console.log(this.state.usersData);          
       //  this.setState({pic:this.state.users.data[0].user.profile_picture})
      }).catch((error)=>{ 
        console.log(error);
      });

      axios.get('https://api.instagram.com/v1/users/self/?access_token=8661035776.d0fcd39.39f63ab2f88d4f9c92b0862729ee2784').then(response=>{
        this.setState({profile_picture:response.data.data.profile_picture}) 
    }).catch(error=>{console.log(error)});
    }

  render()
  {
    var i=0;
    var sessionval=sessionStorage.getItem('session_key', "Bharath");
    if (sessionval!="Bharath")
    {
      console.log("Inside not equal to session")
      return (
            
        <Redirect to="/"/>
       
        )
    }
 return(
      <div>
          <Header screen="Home" showSearchBox="true" showProfilePic="true" myAccount="true" pictureUrl={this.state.profile_picture} parentCallback = {this.callbackFunction}/>
         {this.state.searchString==='' ?
        <Box p={(3, 15)}>
        <Grid container justify-self="center" spacing={2} align-self="center">
            {this.state.usersData.map((card) => (
                <Grid alignContent="center" key={card.id} item lg={6} align-self="center">
                    <CardInfo userDetails={card}/>
                </Grid>
            ))}
        </Grid>
    </Box> : 
    <Box p={(1, 2)}>
    <Grid container justify-self="end" spacing={1} align-self="end">
    {this.state.usersData.filter(cardData => cardData.caption.text.includes(this.state.searchString)).map(filteredCard =>
    (
       <Grid alignContent="center" key={filteredCard.id} item lg={6} align-self="end">
                <CardInfo userDetails={filteredCard}/>
            </Grid>
     ) )
    
    }
        
    </Grid>
</Box> 
   
        }

    

         


              
              <Grid/>
        </div>
        
     )
  }
}
export default Home;