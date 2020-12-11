/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Project4 from "../../images/Quiz_App.png";
import Project2 from "../../images/Weather_Dashboard.png";
import Project3 from "../../images/Work_week_scheduler.png";
import Project1 from "../../images/welders.png";
import Project5 from "../../images/workoutDashboard.png";
import Project6 from "../../images/userDirectory.png";

const styles = {
    cardStyle: {
        width:"400px",
        height: "400px",
        marginLeft: "10%",
        marginTop: "10px",
        float: "left"
    }
}

function Projects() {
    return (
        <div style={{textAlign: "center", }}>
            <header style={{fontSize: "50px", textAlign: "center"}}>My Projects</header>
        <div style={styles.cardStyle}className="card" >
                <img src={Project1} className="card-img-top" alt="Job Tracker"></img>
            <div class="card-body">
            <h5>Welders Organizer</h5>
                <p>This is a project created to help a welder ( anyone really) stay organized.</p>
                <a href="https://kevinserrano.github.io/Project1Week7/" target="_blank" URL>Link to Project</a>{""}
                <br></br>
                <a href="https://github.com/kevinserrano/Project1Week7" target="_blank" URL>Link to GitHub</a>
            </div>
        </div>
        <div style={styles.cardStyle}className="card" >
                <img src={Project2} className="card-img-top" alt="Weather App"></img>
            <div class="card-body">
            <h5>Weather Dashboard</h5>
                        <p>Fully functioning weather application.</p>
                        <a href="https://kevinserrano.github.io/MyWeatherDashboard/" target="_blank" URL>Link to Project</a>
                        <br></br>
                        <a href="https://github.com/kevinserrano/MyWeatherDashboard" target="_blank" URL>Link to GitHub</a>
            </div>
        </div>
        
        <div style={styles.cardStyle}className="card" >
                <img src={Project3} className="card-img-top" alt="Daily Organizer"></img>
            <div class="card-body">
            <h5>Work Day Scheduler</h5>
                        <p>This app will help you schedule your day while working 9-5 shift.</p>
                        <a href="https://kevinserrano.github.io/WorkDayScheduler/" target="_blank" URL>Link to Project</a>
                        <br></br>
                        <a href="https://github.com/kevinserrano/WorkDayScheduler" target="_blank" URL>Link to GitHub</a>
            </div>
        </div>
        <div style={styles.cardStyle}className="card" >
                <img src={Project4} className="card-img-top" alt="Fun Quiz App"></img>
            <div class="card-body">
            <h5>Quiz App</h5>
                        <p>Fun app designed to test your knowledge in web development.</p>
                        <a href="https://kevinserrano.github.io/firstQuizApp/" target="_blank" URL>Link to Project </a>
                        <br></br>
                        <a href="https://github.com/kevinserrano/firstQuizApp" target="_blank" URL>Link to GitHub </a>
            </div>
        </div>
        <div style={styles.cardStyle}className="card" >
                <img src={Project5} className="card-img-top" alt="Fitness App"></img>
            <div class="card-body">
            <h5>Workout App</h5>
                        <p>Like working out? This app is perfect for you! Track all your workouts and progress along the way with this easy to use workout app.</p>
                        <a href=" https://afternoon-tundra-35677.herokuapp.com" target="_blank" URL>Link to Project </a>
                        <br></br>
                        <a href="https://github.com/kevinserrano/WorkOutTracker" target="_blank" URL>Link to GitHub </a>
            </div>
        </div>
        <div style={styles.cardStyle}className="card" >
                <img src={Project6} className="card-img-top" alt="Work Directory"></img>
            <div class="card-body">
            <h5>Employee Directory</h5>
                        <p>This app is more geared for the employer. The app is a directory app where the employer can look up employee info with a click of a button.</p>
                        <a href="https://kevinserrano.github.io/EmployeeDirectory/" target="_blank" URL>Link to Project </a>
                        <br></br>
                        <a href="https://github.com/kevinserrano/EmployeeDirectory" target="_blank" URL>Link to GitHub </a>
            </div>
        </div>
        </div>
        
    )
}

export default Projects;