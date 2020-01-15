import React, {Component} from "react"
import "./App.css"
import Profile from "./components/profile"
import NavigationBar from "./components/appbar"
import ContactSection from "./components/contact";
// import ScrollSpy from "./components/scrollspy";
import {LinearProgress} from "@material-ui/core";
import {Parallax} from "react-parallax";


class App extends Component {

    render() {
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems:'center'
                }}
            >
                <div style={{flexDirection: "row", width: "100%"}}>
                    <NavigationBar/>

                    <Parallax
                        bgImage={'bnwbg1.jpg'}
                        bgImageAlt="the bg"
                        strength={300}
                    >
                        <div style={{margin: '100px 0px'}}>
                            <Profile/>
                        </div>
                    </Parallax>
                    {/*<ScrollSpy/>*/}

                    <div className="section white" style={{padding:'20px 0px'}}>
                        <div className="container">
                            <h1 className="header">Skills</h1>
                            <div>
                                React.JS
                                <LinearProgress variant="determinate" value={25}
                                                style={{height: 30, margin: '10px 0px'}}/>
                                Java 8
                                <LinearProgress variant="determinate" value={50}
                                                style={{height: 30, margin: '10px 0px'}}/>
                                Python
                                <LinearProgress variant="determinate" value={75}
                                                style={{height: 30, margin: '10px 0px'}}/>
                                CSS
                                <LinearProgress variant="determinate" value={100}
                                                style={{height: 30, margin: '10px 0px'}}/>
                            </div>
                        </div>
                    </div>

                    <Parallax
                        bgImage={'bnwbg3.jpg'}
                        bgImageAlt="the bg"
                        strength={300}
                    >
                        <div style={{ height: 400, margin: '100px 0px'}}>
                        </div>
                    </Parallax>

                    <div className="section white">
                        <div className="container" style={{height: 500}}>
                            <h1 className="header">Contact Me</h1>
                            <ContactSection/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App
