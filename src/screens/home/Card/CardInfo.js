import React,{Component} from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';
import { render } from '@testing-library/react';

function getDate(dateParam)
{
    var myDate = new Date( dateParam *1000);
    return (myDate.toLocaleString());

}

const styles =(theme => ({
    root: {
      maxWidth: 345,
    },
    media: {
        height: '300px',
      //  paddingTop:'56.25%',
        margin:'auto',
        width:'450px',
        paddingLeft:'15px'
    },
  }));
  
class CardInfo extends Component
{
  constructor(props){
    super(props);
    this.state={
      comment:"",
  liked:false,
   likeCounts:props.userDetails.likes.count,
   addComment:""
  }
  }
    //const classes = useStyles();
    // var res=getDate(props.userDetails.created_time);

likeHandler=()=>
{
  this.likeToggled();
}
inputChangeHandler=(e)=>
{
  this.setState({comment:e.target.value});
 
}
addHandler=()=>
{
  this.setState({addComment:this.state.comment,
  comment:""})
}

likeToggled=()=>
{
this.setState({liked: !this.state.liked});
if(this.state.liked)
{
  this.setState({likeCounts:--this.state.likeCounts})
}
else
{
  this.setState({likeCounts:++this.state.likeCounts})
}
}
render()
{
  const {classes} = this.props;
  var res=getDate(this.props.userDetails.created_time);
  const heartColor=(this.state.liked)?<Favorite color="secondary"/>:<FavoriteBorderIcon/>
  var Mystring= this.props.userDetails.caption.text;

  var splitted = Mystring.split("\n");
  

return(

       <div className="card-container">
       <Card>
       <CardHeader
       avatar={
          <Avatar>
                <img src={this.props.userDetails.user.profile_picture}/>
          </Avatar>
       }
        title={this.props.userDetails.user.username}
        subheader={res}
       />
       <CardMedia 
       className={classes.media}
        image={this.props.userDetails.images.low_resolution.url}
      />
      <br/>
       <hr/>
      <CardContent>
      <Typography variant="body"color="inherit" component="p">
         {splitted[0]}
      </Typography>
      <Typography variant="body" color="primary" component="p">
        {splitted[1]}
       </Typography>
      <IconButton aria-label="like" onClick={this.likeHandler}>
          {heartColor}
        </IconButton>
      <Typography variant="span">
      {this.state.likeCounts} likes

      </Typography>
      <Typography>
      {this.state.addComment}
      
      </Typography>
      <br/>
      <FormControl>
              <InputLabel htmlFor="Add a comment">Add a comment</InputLabel>
                  <Input type="text" id="Add a comment" name="comment" value={this.state.comment}style={{width:'200px'}} onChange={this.inputChangeHandler}/>
              </FormControl>
              <Button variant="contained" color="primary" style={{marginTop:"12px",marginLeft:"5px"}} onClick={this.addHandler}>
              ADD
            </Button> 
            </CardContent>
     </Card>
        </div>
    )
}}
export default withStyles(styles)(CardInfo);



       
       