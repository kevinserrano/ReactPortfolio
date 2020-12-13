/* eslint-disable react/jsx-no-target-blank */
import React from "react";




const styles = {
    cardStyle: {
        width:"400px",
        height: "400px",
        marginLeft: "10%",
        marginTop: "10px",
        float: "left"
    }
}

function Projects(props) {
    return (
        <div style={{textAlign: "center", }}>
            <header style={{fontSize: "50px", textAlign: "center"}}>My Projects</header>
            {props.results.map(result => (
            <div style={styles.cardStyle}className="card" >
                    <img src={result.Screenshots.imgName} className="card-img-top" alt=""></img>
                <div className="card-body">
                <h5>{result.Screenshots.appName}</h5>
                    <p>{result.Screenshots.description}</p>
                    <a href={result.Screenshots.appUrl} target="_blank" URL>Link to Project</a>{""}
                    <br></br>
                    <a href={result.Screenshots.repoUrl} target="_blank" URL>Link to GitHub</a>
                </div>
            </div>
            ))}
        </div>
        
    )
}

export default Projects;