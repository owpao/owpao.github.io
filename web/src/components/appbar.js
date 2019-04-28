import { AppBar, Button } from "@material-ui/core";
import React from 'react';
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square'
import {
  withRouter
} from 'react-router-dom'

class NavigationBar extends React.Component {

  onLinkedInClick(){
    window.open("https://www.linkedin.com/in/owpaoo/")
  }

  onHomeClick(){
    this.props.history.push('/owpao-io')
  }

    render() {
        return (
          <div
            style={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center"
            }}
          >
            <AppBar
              position="relative"
              color="default"
              style={{ height: 50, justifyContent: "space-around" }}
            >
              <div style={{ flexDirection: "row", display: "flex" }}>
                <Button style={{ marginLeft: 25 }} onClick={this.onHomeClick.bind(this)}>Home</Button>
                <div style={{ flex: 1 }} />
                  <Button style={{ marginLeft: 25, height: 50 }} onClick={this.onLinkedInClick.bind(this)}>
                    <FaLinkedinSquare size={25} />
                  </Button>
              </div>
            </AppBar>
          </div>
        );
    }
}

export default withRouter(NavigationBar)