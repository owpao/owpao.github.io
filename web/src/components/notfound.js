import React, { Component } from "react";

class PageNotFound extends Component{
    render(){
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                fontSize: '3vw',
                color: '#bdbdbd'
            }}>
                Page not found :(
            </div>
        )
    }
}
export default PageNotFound