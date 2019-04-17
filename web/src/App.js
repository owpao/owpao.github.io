import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './materialize/css/materialize.css'
import Profile from './components/profile';
import { AppBar, Grid } from '@material-ui/core';
// import { grey } from '@material-ui/core/colors';

class App extends Component {
  render() {
    return (
      <Grid container spacing={16} style={{height:'100%'}}>
        < Grid item style={{display:'flex', alignContent:'center', justifyContent:'center'}}>
            {/* <AppBar color="default" style={{alignItems:'center'}}>Test</AppBar>  */}
          </Grid>
          <Grid container spacing={16}>
            <Grid item xs={12}>
              < Profile/>
            </Grid>
          </Grid>
      </Grid>
    );
  }
}

export default App;
