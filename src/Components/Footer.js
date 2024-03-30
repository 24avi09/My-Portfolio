import React from 'react'
import { Github_LINK, Linkedin_LINK } from '../Utils/constants'

const Footer = () => {
    return (

        <div className='footer'>
            <h3>Copyright © 2024. All rights are reserved</h3>
            <div className='social-menu'>

                <ul>
                    <li>
                        <a href={Linkedin_LINK} target="blank">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </li>
                    <li>
                        <a href={Github_LINK} target="blank">
                            <i className="fab fa-github"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer



