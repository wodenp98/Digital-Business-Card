import React from "react"
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Info() {

    return (
        <div>
            <img className ="image" src="././Photo Paul.jpg" alt="Paul Vigneron"/>
            <div className="introduce">
                <h1>Paul Vigneron</h1>
                <p>Developpeur web junior</p>
                <span>
                    <a href="https://ash-bank-48a.notion.site/354bf8ff5e0f44f8ba578499f597e1c2?v=4d791e205f314e3988a464ce91c5d514">paulvigneron.portofolio</a>
                </span>
            </div>
            
            <div className="button">
                <a className="email" href="mailto:paulvigneron4698@gmail.com">
                    <EmailIcon className="email-icon"/>
                    <span>Email</span>
                </a>

                <a className="linkedin" href="https://www.linkedin.com/in/paul-vigneron98/">
                    <LinkedInIcon className="linkedin-icon"/>
                    <span>LinkedIn</span>
                </a>
            </div>
        </div>
    )
}

export default Info