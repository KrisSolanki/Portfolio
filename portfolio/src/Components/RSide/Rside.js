import React from 'react'
// import '../Content/Content.css'
import './Rside.css'
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";





const Rside = () => {
    return (
        // <div>
        
            <div className="right">
                <ul className='apps_link'>
                    <li><a href='https://www.linkedin.com/in/kris-solanki-720b1a263'><FaLinkedinIn /></a></li>
                    <li><a href='https://www.github.com/KrisSolanki'><FiGithub /></a></li>
                    <li><a href='https://www.instagram.com/kris.solanki28?igsh=MWp3ZDY4OTIwaHJkOQ=='><FaInstagram /></a></li>
                    <li><a href='https://twitter.com/solanki_kr61454?t=tFnaGyEZ6p9L4vs5mxsUow&s=08'><FiTwitter/></a></li> 
                    {/* <li>5</li> */}
                </ul>

            </div>
         

        // {/* </div> */}


    )
}

export default Rside
