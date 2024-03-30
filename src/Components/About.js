import React from 'react'

const About = () => {
    return (
        <div id="about" className="about">
            <div className='about-down-secton'>
                <div className='about-left-section'>
                    <img src="https://www.stefantopalovic.com/static/media/about-img.62b47e7f183d4b4e9feb.webp" alt='laptopPhoto' />
                    <img src="https://www.stefantopalovic.com/static/media/working-emoji.c5325f52b5be329995a5.png" alt='boyWithLaptop' />
                    <img src="https://www.stefantopalovic.com/static/media/text2.3d5aa6ba2d0632bb4e0572631c3f9dc2.svg" alt='movingPhoto' />
                </div>
                <div className='about-right-section'>
                    <h4>ABOUT ME</h4>
                    <h2>Software Engineer based in Lucknow, India 📍</h2>
                    <p>
                        Hey, my name is Abhishekh, and I'm a Software Engineer. My passion is to solve a problem through Software Engineering.
                    </p>
                    <p>
                        My main stack currently is React.js in combination with Tailwind CSS and Redux.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About