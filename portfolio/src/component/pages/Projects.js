import React from "react";

function Projects() {
    return (
        
        <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">

            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="Images/welders.png" class="d-block" alt="Image of organizer"></img>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Welders Organizer</h5>
                        <p>This is a project created to help a welder ( anyone really) stay organized.</p>
                        <a href="https://kevinserrano.github.io/Project1Week7/" target="_blank" URL>Link to Project</a>
                        <a href="https://github.com/kevinserrano/Project1Week7" target="_blank" URL>Link to GitHub</a>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="Images/Weather_Dashboard.png" class="d-block" alt="Image of weather app"></img>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Weather Dashboard</h5>
                        <p>Fully functioning weather application.</p>
                        <a href="https://kevinserrano.github.io/MyWeatherDashboard/" target="_blank" URL>Link to
                            Project</a>
                        <a href="https://github.com/kevinserrano/MyWeatherDashboard" target="_blank" URL>Link to
                            GitHub</a>


                    </div>
                </div>
                <div class="carousel-item">
                    <img src="Images/Work_week_scheduler.png" class="d-block" alt="Work Day Scheduler"></img>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Work Day Scheduler</h5>
                        <p>This app will help you schedule your day while working 9-5 shift.</p>
                        <a href="https://kevinserrano.github.io/WorkDayScheduler/" target="_blank" URL>Link to Project
                        </a>
                        <a href="https://github.com/kevinserrano/WorkDayScheduler" target="_blank" URL>Link to GitHub
                        </a>

                    </div>
                </div>
                <div class="carousel-item">
                    <img src="Images/Quiz_App.png" class="d-block" alt="Quiz app"></img>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Quiz App</h5>
                        <p>Fun app designed to test your knowledge in web development.</p>
                        <a href="https://kevinserrano.github.io/firstQuizApp/" target="_blank" URL>Link to Project </a>
                        
                        <a href="https://github.com/kevinserrano/firstQuizApp" target="_blank" URL>Link to GitHub </a>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    )
}

export default Projects;