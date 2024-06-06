import React from 'react'
import "./Navbar.css" 

const Navbar = () => {
    return (
        <>
            <div>
                <div className="container_navbar">
                    <div className="sub_container">

                    <div className="left-logo">
                        <div className="logo">
                        <p>Logo </p>
                        </div>
                    </div>
                    <div className="right-menu">
                        <div className="items">
                            <ul className='heading'> 
                                <li>About</li>
                                <li>Skills</li>
                                <li>Projects</li>
                                <li>Contact</li>
                                <button className='Resume_btn'><a  href='/Resume_PDF.pdf'download="Resume.pdf">Resume</a></button>
                            </ul>
                        </div>
                    </div>
                </div>
                    </div>
            </div>
        </>
    )
}

export default Navbar
