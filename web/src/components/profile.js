import React from "react"
import {Paper, Typography} from "@material-ui/core"
import TextLoop from "react-text-loop"
import PROFILE_IMG from "../assets/pao.jpg"

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

const TEXTLOOP_CONTENTS = ["Hello World", "John Paolo Flores", "Software Engineer", "Gamer"]

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
                    <img src={PROFILE_IMG} alt="my pic" height={300}/>
                </Paper>
            </div>
            <div style={{display: 'flex', marginLeft: 20}}>
                <Typography variant="h6" color="inherit" style={{ color: 'white', fontSize: '58px', width: 600, alignSelf: 'center'}}>
                    <TextLoop noWrap={false}>
                        {TEXTLOOP_CONTENTS.map((item, index)=><div key={index} style={{width:600}}>{item}</div>)}
                    </TextLoop>

                    <Typography fontSize="12px" color="inherit">Experienced in programming applications using Java (Spring boot 2) and ReactJS. 
                        Aiming for a secure organization that turns innovative ideas into concrete solutions and maintains to 
                        hone my technical skills
                    </Typography>
                </Typography>
            </div>
        </div>
    )
}

export default Profile
