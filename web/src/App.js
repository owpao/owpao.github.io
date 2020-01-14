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
                    <Profile/>
                    <div style={{marginTop: 50}}>
                        <ContactSection/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App
