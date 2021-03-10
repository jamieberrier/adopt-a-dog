import React from 'react';
//import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 245,
  },
});

const DogCard = ({ dog }) => {
  const { animalID, animalName, animalDescriptionPlain, animalPictures } = dog
  const classes = useStyles();
  
  return (
    <Card className={classes.root} key={animalID}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={animalPictures[0].large.url}
          title={animalName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {animalName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {animalDescriptionPlain}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

export default DogCard;