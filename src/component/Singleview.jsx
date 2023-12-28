import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom' 

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard({selectedUser,data}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const[view,setView] = useState([]);
  
// var b;
useEffect(() =>{
    // b= data.filter((e) => e.u_id === selectedUser);
   const b= data.filter((e)=> e.u_id === selectedUser);
    setView(b);

},[selectedUser]);
console.log(view)
  return (
    <Card sx={ style}>
        {view.map((value,index)=>{
            return(
                <>
         
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        title={
            <p style={{ fontWeight:'bolder', fontSize:"20px"}}> {value.userName}</p>
        }
        action={
          
          <IconButton >
            <Typography align='center'>
               {value.Name}
               </Typography>
         </IconButton>
        }
    
       
      />
      
   


      <CardMedia
       
      />
      <img src={value.Image}  style={{width:"200px",height:"200px"}}/>
      <CardContent>
       
        <Typography variant="body2" color="text.secondary">
        {value.Price}
        <br></br>
        {value.Category}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method: <Link to="/View">BACK</Link></Typography>
          
          
        </CardContent>
      </Collapse>
      </>
         )
        })}
    </Card>
  );
}
