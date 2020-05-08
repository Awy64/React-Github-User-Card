import React from 'react';
import { Card, Typography, CardMedia, CardContent, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const GitCard = ({data}) => {
  const classes = useStyles();
    return(
      <Card className={classes.root}>
        <CardMedia
          component="img"
          alt="GitHub Avatar"
          height="300"
          image={data.avatar_url}
          title="GitHub Avatar"
        />
        <CardContent>
          <Typography>
          {data.name === undefined ? "" : `Name: ${data.name}`}
          </Typography>
          <Typography>
            UserName: {data.login}
          </Typography>
          <Typography>
            {data.followers === undefined ? "" : `Followers: ${data.followers}`}
          </Typography>
          <Typography>
            {data.following === undefined ? "" : `Following: ${data.following}`}
          </Typography>
        </CardContent>
      </Card>
    )
}

export default GitCard;