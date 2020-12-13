import React from "react";
import image from "./image/me.png";


const styles = {
    paragraph: {
        fontFamily: "Lateef, cursive",
        fontSize: "23px"
    },
    mePic: {
        width: "250px",
        height: "300px",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
    },
    title: {
        textAlign: "center",
        fontSize: "60px"


    }
}

function About(){
    return (
    <div style= {styles.paragraph} className="card">
        <h1 className="aboutMeTitle" style= {styles.title}>About Me</h1>
        <img style= {styles.mePic} src={image} alt="me" className="myPic"></img>
        
            <div className="card-body">
        <p>
            I was born Nov. 30th 1984 in San Marcos, TX. I currently reside in 
            San Antonio, TX and work in the oil field industry. The company I 
            work for is based out of Oklahoma City and we provide many forms of
            communication to companies out in the oil field. I have two beautiful
            and amazing children and to top it off an equally amazing and beautiful wife.
        </p>
        <p>
            I am also currently a part-time student at UTSA and I am studying 
            on becoming a web developer.
            My
            drive in
            life is my family and the need and want to provide an amazing life for them. I am
            extremely close to my father, Al Serrano who is now retired from a 37yr career with Wal-Mart
            where
            he
            reached
            Regional Vice President status. I would have to credit him for instilling the values of hard
            work
            and
            family.
        </p>  
            </div>
    </div>
    )}

export default About;