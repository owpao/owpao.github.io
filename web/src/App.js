import React, {Component} from "react"
import "./App.css"
import Profile from "./components/profile"
import NavigationBar from "./components/appbar"
import ContactSection from "./components/contact";
import {LinearProgress} from "@material-ui/core"
import {Parallax} from "react-parallax";
import {GoMail} from "react-icons/go"
import {AiOutlineStar} from "react-icons/ai"

class App extends Component {

    render() {

        const progressBarStyle = {height: 30, margin: '10px 0px'}
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

                    <div className="section white">

                        <div className="container">
                            <h1 className="header">
                                <AiOutlineStar size={40} style={{color:'#BDBDBD', verticalAlign: 'sub', margin: '0 10px'}}/>
                                Skills ++
                            </h1>
                            <div>
                                React.JS
                                <LinearProgress variant="determinate" value={77}
                                                style={progressBarStyle}/>
                                Java 8
                                <LinearProgress variant="determinate" value={79}
                                                style={progressBarStyle}/>
                                Python
                                <LinearProgress variant="determinate" value={73}
                                                style={progressBarStyle}/>
                                CSS
                                <LinearProgress variant="determinate" value={76}
                                                style={progressBarStyle}/>
                            </div>
                        </div>
                    </div>

                    <Parallax
                        bgImage={'bnwbg3.jpg'}
                        bgImageAlt="the 2nd bg"
                        strength={300}
                    >
                        <div style={{ height: 400, margin: '100px 0px'}}>
                            {/*Works*/}
                        </div>
                    </Parallax>

                    <div className="section white">
                        <div className="container">
                            <h1 className="header">
                                <GoMail size={40} style={{color:'#BDBDBD', verticalAlign: 'sub', margin: '0 10px'}}/>
                                Send me a message!
                            </h1>
                            <ContactSection/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App
