import React, { Component } from "react";
import "./App.css";
import "./materialize/css/materialize.css";
import Profile from "./components/profile";
import NavigationBar from "./components/appbar";

class App extends Component {
  render() {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <div style={{ flexDirection: "row", width: "80%" }}>
          <div style={{ marginTop: 20 }}>
            <NavigationBar />
          </div>
          <div style={{ height:'100%', marginTop: 100 }}>
            <Profile />
          </div>

          <div className='footer'
            style={{
              display:'flex',
              flexDirection:'column',
              flex: 1,
              justifyContent: 'space-between',
              textAlign:'center',
              marginBottom: 36,
              // height:'100%'
            }}
          >
            "Kabado as a person"
          </div>
        </div>
      </div>
    );
  }
}

export default App;
