import React, { Component } from "react";
import { Paper, Typography } from "@material-ui/core";
import TextLoop from "react-text-loop";

const styles = {
  paper: {
    width: 250,
    height: 250,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    marginLeft: 10,
    marginRight: 10
  }
};

class Profile extends Component {
  render() {
    return (
      <div
        style={{
          alignContent: "center",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div>
          <Paper style={styles.paper}>
            <img src={'pao.jpg'} alt="my pic" height={150} />
          </Paper>
        </div>
        <div>
          <Paper style={Object.assign("", styles.paper, { width: 500 })}>
              <Typography variant="h6" color="inherit" style={{textAlign:'center'}}>
                <TextLoop noWrap={false}>
                      <div style={{width:500}}>Hello World</div>
                      <div style={{width:500}}>I'm John Paolo Flores</div>
                      <div style={{width:500}}>Web Developer at OOCL Philippines Inc.</div>
                  </TextLoop>
              </Typography>
          </Paper>
        </div>
      </div>
    );
  }
}

export default Profile;
