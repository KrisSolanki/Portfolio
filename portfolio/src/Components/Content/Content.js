import React from 'react'
import './Content.css'
import Rside from '../RSide/Rside'
import Side from '../Side/Side'
import { useTypewriter , Cursor} from 'react-simple-typewriter';
import img from '../../Asset/ms.jpeg'

const Content = () => {
    const [text]= useTypewriter({
        words: ['software engineer', 'web developer'],
        loop: true,  // Ensures looping
        typeSpeed: 120,
        deleteSpeed: 80,
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
                        <p>I am a<span> {text}</span>
                        {/* <Cursor/> */}
                            </p>
                    </div>
                    <div className="introduction">
                        <p>
                        I’m a web developer and software engineer based in India who specializes in building and sometimes designing web experiences. Graduated with a Bachelor's degree in Computer Applications. With a keen interest in web development, I am dedicated to expanding my skills and knowledge in this field. I focus on creating dynamic and responsive web applications, always exploring new technologies and tools to enhance my work.
                        </p>
                        </div>
                    </div>

                        <div className="middle_2">
                            <div className="img_container">
                        <img src = {img} alt="hello"/> 
                            </div>
                </div>
                </div> 
                <Side/>
                
            </div>
        </div>
    )
}

export default Content
