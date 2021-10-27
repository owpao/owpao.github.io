import { Link } from "@material-ui/core"
import React from "react"

const ProjectItem = (props) => {
     const {previewPicture, projectTitle, projectDescription, projectLink} = props

    return <div style={{display:"flex", padding: 20}}>
        <img src={previewPicture} alt="my pic" style={{height: 300, width:500, flexShrink:0}}/>
        <div style={{marginLeft: 30, color: "white", display:"flex", flexDirection:"column", justifyContent:"center"}}>
            <h1>{projectTitle}</h1>
            <h4>{projectDescription}</h4>
            <Link href={projectLink}>Go to site</Link>
        </div>
    </div>
}

export default ProjectItem