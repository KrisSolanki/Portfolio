import React from 'react'
import './Content.css'
import Rside from '../RSide/Rside'
import Side from '../Side/Side'
import { useTypewriter } from 'react-simple-typewriter';

const Content = () => {
    const {text}= useTypewriter({
        words: ['coder', 'web developer'],
        loop: true,  // Ensures looping
        typeSpeed: 1000,
        deleteSpeed: 400,
    });
    return (
        <div className='container_content'>
            <div className="sub_content">
                <Rside/>
                <div className="mm">

                <div className="middle">

                    <div className="greet">
                        <p>Hi, my name is</p>
                    </div>
                    <div className="name">
                        <p>Kris Solanki</p>
                    </div>
                    <div className="typ">
                        <p>I am a <span> web developer</span>
                            </p>
                    </div>
                    <div className="introduction">
                        <p>I am a graduate with a Bachelor's degree in Computer Applications . With a keen interest in web development, I am dedicated to expanding my skills and knowledge in this field. I have experience with frameworks such as Reactjs and Django, which has furthered my passion for creating dynamic and responsive web applications.</p>
                    </div>

                </div>
                </div>
                <Side/>
                
            </div>
        </div>
    )
}

export default Content
