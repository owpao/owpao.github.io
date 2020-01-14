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
                position: 'absolute',
                top: 0,
                width: '100%'
            }}
        >
            <AppBar
                position="relative"
                color="default"
                style={{height: 50, justifyContent: "space-around"}}
            >
                <div style={{flexDirection: "row", display: "flex"}}>
                    <Button style={{marginLeft: 25}} onClick={onHomeClick.bind(this,props)}>Home</Button>
                    <div style={{flex: 1}}/>
                    <Button style={{marginLeft: 25, height: 50}} onClick={onLinkedInClick.bind(this)}>
                        <FaLinkedinSquare size={25}/>
                    </Button>
                </div>
            </AppBar>
        </div>
    )
}

export default withRouter(NavigationBar)