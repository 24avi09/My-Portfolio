import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from 'react-icons/ai'

const Footer = () => {
    return (
        <footer>
            <div>
                <img
                    src={"https://avatars.githubusercontent.com/u/91527169?v=4"}
                    alt="Founder"
                />
                <h2>Abhishekh Kumar Yadav</h2>
                <p>Motivation is temporary, but discipline last forever.</p>
            </div>
            <aside>
                <h2>Social Media</h2>
                <article>
                    <a href="https://linkedin.com/in/abhishekh-kumar-yadav-5856b0221" target={"blank"} >
                        <AiFillLinkedin />
                    </a>
                    <a href="https://github.com/24avi09" target={"blank"} >
                        <AiFillGithub />
                    </a>
                </article>
            </aside>
            <a href="#home"> <AiOutlineArrowUp />  </a>
        </footer>
    )
}

export default Footer