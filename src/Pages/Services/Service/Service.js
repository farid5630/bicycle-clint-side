import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';


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
  
 
  

const Service = (props) => {
    const {_id, name, description, configuration, img} = props.service; 

    
        const [expanded, setExpanded] = React.useState(false);
      
        const handleExpandClick = () => {
          setExpanded(!expanded);
        };

    return (
          <Grid item xs={12} sm={4} md={4}>
            
        <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          // avatar={
          //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
          //   F
          //   </Avatar>
          // }
        //   action={
        //     <IconButton aria-label="settings">
        //       <MoreVertIcon />
        //     </IconButton>
        //   }
        variant="h6"
          title={name}
          // subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="200"
          image={img}
          sx={{ width: "auto", m:"auto"}}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          {description.split(' ').slice(0, 20).join(' ')}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          {/* <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton> */}

          <Link to={`/booknow/${_id}`} style={{textDecoration:"none"}}>
              <Button variant="contained">Buy Now</Button>
          </Link> 
          
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
            <Typography paragraph>Configuration :</Typography>
            <Typography paragraph>
              {configuration}
            </Typography>
            
          </CardContent>
        </Collapse>
      </Card>
      </Grid>
    );
};

export default Service;