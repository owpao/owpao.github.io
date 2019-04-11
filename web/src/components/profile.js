import React, { Component } from 'react';
import pic from '../assets/pao.jpg'

class Profile extends Component {
  render() {
    return (
        <div style={{justifyContent:'space-around'}}>
            <img src={pic} alt='a picture' style={{height: 450}}/>
            <div> ano na </div>
        </div>
    );
  }
}

export default Profile;
