import React, { useState } from 'react'
import { LKO_MAPS, MAIL } from '../Utils/constants'
import Modal from './Modal'

const Contact = () => {
    const [openModal, setOpenModal] = useState(false);


    return (
        <div id='contact' className='contact'>
            <div className='contact-info-part'>
                <h3>CONTACT</h3>
                <h2 className='contact-h2-child1'>Don't be shy! Hit me up! 👇</h2>
                <div className='contact-down-section'>
                    <div className='mail-pin'>
                        <span>
                            <i className="fas fa-map-pin"></i>
                        </span>
                        <div>
                            <h5>Location</h5>
                            <a href={LKO_MAPS} target="blank">Lucknow, India</a>
                        </div>
                    </div>
                    <div className='mail-div'>
                        <span>
                            <i className="fas fa-envelope-open"></i>
                        </span>
                        <div>
                            <h5>Mail</h5>
                            <a href={MAIL}>3avu.yd@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact-form-div">
                <div className='contact-form'>
                    <h2>Get In Touch</h2>
                    <p>Message me if you have any work opportunities or a cool project idea!</p>
                    <button onClick={() => setOpenModal(true)}>Let's do this</button>
                </div>
            </div>
            <Modal open={openModal} onClose={() => setOpenModal(false)} />
        </div>
    )
}

export default Contact