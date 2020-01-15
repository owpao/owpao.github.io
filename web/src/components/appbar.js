import {AppBar, Button} from "@material-ui/core"
import React from 'react'
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square'
import {withRouter} from "react-router-dom"


const onLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/owpaoo/")
}

const onHomeClick = (props) => {
    props.history.push('/')
}

const NavigationBar = (props) => {
    return (
        <div
            style={{
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
                top: 0,
                width: '100%',
            }}
        >
            <AppBar
                position="relative"
                color="default"
                style={{
                    height: 75, justifyContent: "space-around", backgroundColor: 'rgba(0,0,0,0)', boxShadow:"none"
                }}
            >
                <div style={{flexDirection: "row", display: "flex", alignItems:'stretch'}}>
                    <Button style={{marginLeft: 25, color:"white"}} onClick={onHomeClick.bind(this,props)}>Home</Button>
                    <div style={{flex: 1}}/>
                    <Button style={{marginLeft: 25, height: 50}} onClick={onLinkedInClick.bind(this)}>
                        <FaLinkedinSquare size={25} style={{color:'white'}}/>
                    </Button>
                </div>
            </AppBar>
        </div>
    )
}

export default withRouter(NavigationBar)