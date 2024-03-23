import React from 'react'
import { motion } from "framer-motion"
import { AiOutlineDesktop, AiOutlineCloudServer, AiOutlineLaptop, } from "react-icons/ai"

const Services = () => {

    const animations = {
        whileInView: {
            x: 0,
            y: 0,
            opacity: 1
        },
        one: {
            x: "-100%",
            opacity: 0
        },
        twoAndThree: {
            y: "-100%",
            opacity: 0
        },
        four: {
            x: "100%",
            opacity: 0
        },
    }


    return (
        <div id='services' >
            <h2>Services</h2>
            <section>
                <motion.div
                    className='serviceBox1'
                    whileInView={animations.whileInView}
                    initial={animations.one}
                >
                    <h3>1+</h3>
                    <p>Year Experience</p>
                </motion.div>
                <motion.div
                    className='serviceBox2'
                    whileInView={animations.whileInView}
                    initial={animations.twoAndThree}
                >
                    <AiOutlineLaptop />
                    <span>Front-End Developnment</span>
                </motion.div>
                <motion.div
                    className='serviceBox3'
                    whileInView={animations.whileInView}
                    initial={animations.twoAndThree}
                    transition={{
                        delay : 0.2,
                    }}
                >
                    <AiOutlineCloudServer />
                    <span>Back-End Developnment</span>
                </motion.div>
                <motion.div
                    className='serviceBox4'
                    whileInView={animations.whileInView}
                    initial={animations.four}
                >
                    <AiOutlineDesktop />
                    <span>Web Designing</span>
                </motion.div>
            </section>
        </div>
    )
}

export default Services