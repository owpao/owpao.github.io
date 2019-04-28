import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './materialize/css/materialize.css'
import Profile from './components/profile';
import NavigationBar from './components/appbar';
// import { grey } from '@material-ui/core/colors';


class App extends Component {
  render() {
    return (
      <div style={{width:'100%', height: '100%', display:'flex', justifyContent:'center'}}>
        <div style={{flexDirection:'row'}}>
          <NavigationBar/>
        </div>
        <div style={{flexDirection:'row'}}>
          <Profile/>
        </div>
      </div>
    );
  }
}

export default App;
