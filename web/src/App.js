import React from "react"
import "./App.css"
import Profile from "./components/profile"
import ContactSection from "./components/contact";
import {Parallax} from "react-parallax";
import {GoMail} from "react-icons/go"
import {AiOutlineStar} from "react-icons/ai"
import BG1 from "./assets/bnwbg1.jpg"
import BG3 from "./assets/bnwbg3.jpg"
import PROF_PIC from "./assets/pao.jpg"
import ProjectItem from "./components/projectitem";
import {FaJava, FaReact, FaPython, FaDocker, FaSass} from "react-icons/fa"
import {SiSpringboot, SiMysql, SiJest, SiGit} from "react-icons/si"
import { Grid } from "@material-ui/core";


const PORTFOLIO = [
    {
        previewPicture: PROF_PIC,
        projectTitle: '"No help too little" donation drive',
        projectDescription: "Quick Webpage to show transparency of donations made for a company making adhesives using ReactJS as frontend and google spreadsheet API",
        projectLink: "https://ulysses-donation-drive.netlify.app"
    },
    {
        previewPicture: PROF_PIC,
        projectTitle: "Stikwel",
        projectDescription: "Product Website made for a company making adhesives using ReactJS as frontend and Firebase/NodeJS for backend",
        projectLink: "https://stikwel-prd.web.app/"
    },
    {
        previewPicture: PROF_PIC,
        projectTitle: "GoPapa",
        projectDescription: "Website offering food delivery service for citizens of Calamba, Laguna",
        projectLink: "http://go-papa.com"
    },

]


const App = ()=> {

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems:'center'
            }}
        >
            <div style={{flexDirection: "row", width: "100%"}}>

                <Parallax
                    bgImage={BG1}
                    bgImageAlt="the bg"
                    strength={300}
                >
                    <div style={{margin: '100px 0px'}}>
                        <Profile/>
                    </div>
                </Parallax>

                <div style={{padding: "20px"}}>
                    <h1 className='header' style={{color:"white"}}> 
                        <AiOutlineStar size={40} style={{color:'#BDBDBD', verticalAlign: 'sub', margin: '0 10px'}}/> 
                        Projects Handled
                        </h1>
                    <div style={{padding: "0px 100px"}}>
                        {PORTFOLIO.map((project, index)=>{return <ProjectItem key={index} {...project} />})}
                    </div>
                </div>

                <Parallax
                    bgImage={BG3}
                    bgImageAlt="the 2nd bg"
                    strength={300}
                >
                    <div style={{ height: 400, margin: '75px 0px'}}>
                        <h1 className="header" style={{display:'flex', justifyContent:'center', marginBottom: 50}}>
                            Skills | Technologies
                        </h1>

                        <Grid container lg={12} xs={12} style={{display:'flex', justifyContent:'space-around'}}>
                            <div style={{width:100}}><FaJava size={'100%'}/> </div>
                            <div style={{width:100}}><FaReact size={'100%'}/> </div>
                            <div style={{width:100}}><SiSpringboot size={'100%'}/> </div>
                            <div style={{width:100}}><FaPython size={'100%'}/> </div>
                            <div style={{width:100}}><FaDocker size={'100%'}/> </div>
                            <div style={{width:100}}><SiMysql size={'100%'}/> </div>
                            <div style={{width:100}}><FaSass size={'100%'}/> </div>
                            <div style={{width:100}}><SiJest size={'100%'}/> </div>
                            <div style={{width:100}}><SiGit size={'100%'}/> </div>
                        </Grid>
                    </div>
                </Parallax>



                <div style={{display:'flex', backgroundColor: "white", justifyContent:'center'}}>
                    <div style={{marginRight: 30}}>
                        <h1 className="header">
                            <GoMail size={40} style={{color:'#BDBDBD', verticalAlign: 'sub', marginRight: 10}}/>
                            Send me a message!
                        </h1>
                        <ContactSection/>
                    </div>
                    <div>
                        Email Address: johnpaoloflores@gmail.com
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default App
