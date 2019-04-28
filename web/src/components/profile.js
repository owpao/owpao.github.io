import React, { Component } from "react";
import pic from "../assets/pao.jpg";
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
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div>
          <Paper style={styles.paper}>
            <img src={pic} alt="pic ko baket" height={150} />
          </Paper>
        </div>
        <div>
          <Paper style={Object.assign("", styles.paper, { width: 500 })}>
              <Typography variant="h6" color="inherit" style={{textAlign:'center'}}>
                <TextLoop noWrap={false}>
                      <div style={{width:250}}>Hello World</div>
                      <div style={{width:250}}>Paolo Flores</div>
                  </TextLoop>
              </Typography>
          </Paper>
        </div>
      </div>
    );
  }
}

export default Profile;
