import React, {Component} from "react"
import "./App.css"
import "./materialize/css/materialize.css"
import Profile from "./components/profile"
import NavigationBar from "./components/appbar"
import ContactSection from "./components/contact";

class App extends Component {
    render() {
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    height: '100%',
                    alignItems:'center'
                }}
            >
                <div style={{flexDirection: "row", width: "100%"}}>
                    <NavigationBar/>
                    {/*<div className="parallax-container">*/}
                    {/*    <div className="parallax"><img src="images/parallax1.jpg"></div>*/}
                    {/*</div>*/}
                    <Profile/>
                    {/*<div style={{*/}
                    {/*    display: "flex",*/}
                    {/*    justifyContent: "center",*/}
                    {/*    color: '#FFFFFF',*/}
                    {/*    fontFamily: 'sans-serif',*/}
                    {/*    margin: '20px 0px'*/}
                    {/*}}>*/}
                    {/*    Skillz*/}
                    {/*</div>*/}
                    {/*<div style={{marginTop: 50}}>*/}
                    {/*    <ContactSection/>*/}
                    {/*</div>*/}
                </div>
            </div>
        )
    }
}

export default App
