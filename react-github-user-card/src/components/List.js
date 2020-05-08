import React from 'react';
import GitCard from './GitCard'
import { Grid } from '@material-ui/core';



const List = props => {


  console.log("List data", props.data)
  console.log("followers data", props.followers)

  

  return(
    <Grid 
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <GitCard data={props.data}/>
      {props.followers.length === 0 ? "" : props.followers.map((e, i) => {
        return(
        <GitCard data={e} key={i} />
      )})}
    </Grid>
    
  )
}

export default List;