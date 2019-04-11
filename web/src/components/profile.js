import React, { Component } from 'react';
import pic from '../assets/pao.jpg'

class Profile extends Component {
  render() {
    return (
        <div>
            <img src={pic} alt='a picture' style={{height: 450}}/>
        </div>
    );
  }
}

export default Profile;
