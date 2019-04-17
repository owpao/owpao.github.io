import React, { Component } from 'react';
import pic from '../assets/pao.jpg' 
import { Paper, Grid } from '@material-ui/core';

const styles = {
  paper: {
    width:250,
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex'
  }
}

class Profile extends Component {
  render() {
    return (
      <Grid container spacing={16} justify='center'>
        <Grid item>
          <Paper style={styles.paper}>
            <img src={pic} alt='pic ko baket' height={150}/>
          </Paper>
        </Grid>
        <Grid item>
          <Paper style = {styles.paper}>
            owpao
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default Profile;
