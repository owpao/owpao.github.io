import {AppBar, Button} from "@material-ui/core"
import React from 'react'
import {withRouter} from "react-router-dom"
import {FaFacebookSquare, FaLinkedin} from "react-icons/fa"


const onLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/owpaoo/")
}

const onFacebookClick = () => {
    window.open("https://www.facebook.com/owpaoo/")
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
                    <Button style={{height: 50}} onClick={onLinkedInClick.bind(this)}>
                        <FaLinkedin size={30} style={{color:'white'}}/>
                    </Button>
                    <Button style={{height: 50}} onClick={onFacebookClick.bind(this)}>
                        <FaFacebookSquare size={30} style={{color:'white'}}/>
                    </Button>
                </div>
            </AppBar>
        </div>
    )
}

export default withRouter(NavigationBar)