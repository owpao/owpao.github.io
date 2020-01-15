import React, {Component} from "react"
import "./App.css"
import "./materialize/css/materialize.css"
import Profile from "./components/profile"
import NavigationBar from "./components/appbar"
import ContactSection from "./components/contact";
import ScrollSpy from "./components/scrollspy";

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
                    {/*<ScrollSpy/>*/}
                    {/*<div className="parallax-container">*/}
                    {/*    <div className="parallax"><img src="images/parallax1.jpg"></div>*/}
                    {/*</div>*/}
                    <div className="parallax-container" style={{display:'flex',alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <div className="parallax"><img src="bnwbg1.jpg"/></div>
                        <Profile/>
                    </div>
                    <div className="section white">
                        <div className="row container">
                            <h2 className="header">Skills</h2>
                            <div className="grey-text text-darken-3 lighten-3">
                                PUT SKILL HERE
                            </div>
                            <div className="grey-text text-darken-3 lighten-3">
                                PUT SKILL HERE
                            </div>
                            <div className="grey-text text-darken-3 lighten-3">
                                PUT SKILL HERE
                            </div>
                            <div className="grey-text text-darken-3 lighten-3">
                                PUT SKILL HERE
                            </div>
                            <div className="grey-text text-darken-3 lighten-3">
                                PUT SKILL HERE
                            </div>

                        </div>
                    </div>
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
