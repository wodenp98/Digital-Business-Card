import React from "react"
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Info() {
    return (
        <div>
            <img className ="image" src="././Rectangle.png" alt="Laura Smith"/>
            <div className="introduce">
                <h1>Laura Smith</h1>
                <p>Frontend developper</p>
                <span>laurasmith.website</span>
            </div>
            
            <div className="button">
                <button className="email">
                    <EmailIcon className="email-icon"/>
                    <span>Email</span>
                </button>

                <button className="linkedin">
                    <LinkedInIcon className="linkedin-icon"/>
                    <span>LinkedIn</span>
                </button>
            </div>
        </div>
    )
}

export default Info