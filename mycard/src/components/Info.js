import React from "react"
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Info() {
    return (
        <div>
            <img className ="image" src="././Rectangle.png" alt="Laura Smith"/>
            <div>
                <h1>Laura Smith</h1>
                <p>Frontend developper</p>
                <p>laurasmith.website</p>
            </div>
            
            <div>
                <button><EmailIcon/>Email</button>
                <button><LinkedInIcon/>Linkedin</button>
            </div>
        </div>
    )
}

export default Info