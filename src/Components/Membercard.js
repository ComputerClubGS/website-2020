import React from 'react';
import '../Css files/Members.css'
import { makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { SocialIcon } from 'react-social-icons';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    
    media: {
      height: 0,
      paddingTop: '80%', 
      
      
    },
    
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',

      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
   
  }),
);

export default function Membercard(props)
{
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  return (
    <Card className="dtx">
      
      <CardMedia
        className={classes.media}
        image={props.img}

      />
      <h5 className="head">
        {props.name} 
      </h5>
      <CardHeader className="aps"
        
       
        style={{backgroundColor:"white", textAlign:"center",textTransform:"Uppercase",color:"black",fontWeight:900}}
        // title={props.name} 
        subheader={props.designation}
      />
      
      <CardActions disableSpacing style={{backgroundColor:"white", padding:"-10px 10px", marginTop:"-30px"}}>
      <SocialIcon url="http://linkedin.com/in/jaketrent" bgColor="#0e76a8 " style={{ height: 35, width: 35,marginLeft:5}} />
        <IconButton aria-label="Linkel">
  
        </IconButton>
        <IconButton aria-label="share">
          <SocialIcon url="http://github.com/jaketrent" bgColor="black" style={{ height: 35, width: 35,marginLeft:-10}} />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent style={{backgroundColor:"hsl(210,46%,95%)"}}>
         
          <Typography paragraph style={{color:"#14141f",fontWeight:400}}  >
          
           
            {props.description }
          </Typography>
        
        </CardContent>
      </Collapse>
    </Card>
  );
}