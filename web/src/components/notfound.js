import React, { Component } from "react";
import pic from "../assets/error-404-page-not-found.jpg";

class PageNotFound extends Component{
    render(){
        return (
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height:'100vh'}}>
                <img src={pic}/>
            </div>
        )
    }
}
export default PageNotFound