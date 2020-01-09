import React, {Component} from "react"
import "./App.css"
import "./materialize/css/materialize.css"
import Profile from "./components/profile"
import NavigationBar from "./components/appbar"

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
                    <div>
                        <Profile/>
                    </div>

                    {/*<div className='footer'*/}
                    {/*  style={{*/}
                    {/*    display:'flex',*/}
                    {/*    flexDirection:'column',*/}
                    {/*    flex: 1,*/}
                    {/*    justifyContent: 'space-between',*/}
                    {/*    textAlign:'center',*/}
                    {/*    marginBottom: 36*/}
                    {/*  }}*/}
                    {/*>*/}
                    {/*</div>*/}
                </div>
            </div>
        )
    }
}

export default App
