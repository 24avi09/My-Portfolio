import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MAIL } from '../Utils/constants';

const Modal = ({ open, onClose }) => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_1wnrkao', 'template_bhtymon', form.current, 'lBnkkXjD_H9kkfabH')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        onClose();
    };
    if (!open) return null;
    return (
        <div onClick={onClose} className="overlay">
            <div onClick={(e) => { e.stopPropagation() }} className="modalContainer">
                <div className='img-div'>
                    <a href={MAIL}>
                        <img src={"/images/mail.webp"} alt='contactPhoto' />
                    </a>
                </div>
                <div className='form-div'>
                    <p onClick={onClose}><i className="fa-solid fa-x"></i></p>
                    <h2>Get in touch</h2>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className='input'>
                            <input type="text" name="user_name" placeholder='Name' required />
                            <span className='focus-input'></span>
                            <span className="symbol-input">
                                <i className="fa-solid fa-user"></i>
                            </span>
                        </div>
                        <div className='input'>
                            <input type="email" name="user_email" placeholder='Email' required />
                            <span className='focus-input'></span>
                            <span className="symbol-input">
                                <i className="fa-solid fa-envelope"></i>
                            </span>
                        </div>
                        <div className='textarea'>
                            <textarea name="message" placeholder="Message" required />
                            <span></span>
                        </div>
                        <input className='submit-button' type="submit" value="Send" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Modal