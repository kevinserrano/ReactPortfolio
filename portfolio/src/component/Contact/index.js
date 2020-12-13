import React from "react";



function Contact() {
  return (
    <div className="container">
        <ul className="list-group">
            <li className="list-group-item">Name: Kevin Serrano</li>
            <li className="list-group-item">Phone #: 405-802-3883</li>
            <li className="list-group-item">Email: kserrano2784@yahoo.com</li>
            <a href="https://github.com/kevinserrano" target="_blank" class="list-group-item">GitHub Account</a>
            <a href="https://www.linkedin.com/in/kevin-serrano-634a011a8/" target="_blank"
                className="list-group-item">LinkedIn
                Account</a>
            <a href="Images/Resume.docx" target="_blank" className="list-group-item">Resume</a>
        </ul>
    </div>

  );
}

export default Contact;
