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
                        // blur={1}
                        bgImage={'bnwbg1.jpg'}
                        bgImageAlt="the bg"
                        strength={300}
                    >
                        <div style={{ height: 400, margin: '100px 0px'}}>
                            <Profile/>
                        </div>
                    </Parallax>
                    {/*<ScrollSpy/>*/}

                    <div className="section white" style={{padding:'20px 0px'}}>
                        <div className="container">
                            <h2 className="header">Skills</h2>
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
                        // blur={1}
                        bgImage={'bnwbg3.jpg'}
                        bgImageAlt="the bg"
                        strength={300}
                    >
                        <div style={{ height: 400, margin: '100px 0px'}}>
                        </div>
                    </Parallax>

                    {/*<div style={{*/}
                    {/*    display: "flex",*/}
                    {/*    justifyContent: "center",*/}
                    {/*    color: '#FFFFFF',*/}
                    {/*    fontFamily: 'sans-serif',*/}
                    {/*    margin: '20px 0px'*/}
                    {/*}}>*/}
                    {/*</div>*/}
                    <div className="section white">
                        <div className="container" style={{height: 700}}>
                            <h2 className="header">Contact Me</h2>
                            <ContactSection/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App
