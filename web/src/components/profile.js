import React from "react"
import {Paper, Typography} from "@material-ui/core"
import TextLoop from "react-text-loop"

const styles = {
    paper: {
        justifyContent: "center",
        alignItems: 'center',
        display: "flex",
        marginLeft: 10,
        marginRight: 10,
        padding: 10
    }
}


const Profile = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center"
            }}
        >
            <div>
                <Paper style={styles.paper}>
                    <img src={'pao.jpg'} alt="my pic" height={300}/>
                </Paper>
            </div>
            <div style={{display: 'flex'}}>
                <Typography variant="h6" color="inherit" style={{
                    textAlign: 'center', color: 'white', fontSize: '3vw', width: 600, alignSelf: 'center'
                }}>
                    <TextLoop noWrap={false}>
                        <div style={{width: 600}}>Hello World</div>
                        <div style={{width: 800}}>I'm John Paolo Flores</div>
                        <div style={{width: 900}}>Web Developer at OOCL Philippines Inc.</div>
                    </TextLoop>
                </Typography>
            </div>
        </div>
    )
}

export default Profile
