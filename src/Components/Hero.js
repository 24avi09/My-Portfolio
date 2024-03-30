import { Github_LINK, Linkedin_LINK, wave_img } from '../Utils/constants';

const Hero = () => {
    return (
        <div id="hero" className="hero">
            <div className="left-section">
                {/* <h1 className='h1'>Software Development</h1> */}
                <h1 className='h2'>Software Engineer <span><img src={wave_img} alt='hand-wave' /></span></h1>
                <p>Hi, I'm Abhishekh Kumar Yadav. A passionate Software</p>
                <p>Engineer based in Lucknow, India. 📍</p>
                <div className='social-links'>
                    <ul>
                        <li>
                            {/* <a href="https://drive.google.com/file/d/1LRMtA971hRDdj-8q5qv7ot1DbQcgTMIF/view?google_abuse=GOOGLE_ABUSE_EXEMPTION%3DID%3Df1ccee7ec93eb18d:TM%3D1705401885:C%3Dr:IP%3D2409:40e3:103d:94d2:d175:48a3:41e1:e64a-:S%3DLwwmOiTNkTcV2zyUbAjdXdM%3B+path%3D/%3B+domain%3Dgoogle.com%3B+expires%3DTue,+16-Jan-2024+13:44:45+GMT" target="blank"> */}
                            <a href={Linkedin_LINK} target="blank">
                                <i className="fab fa-linkedin-in icon"></i>
                            </a>
                        </li>
                        <li>
                            <a href={Github_LINK} target="blank">
                                <i className="fab fa-github icon"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="right-section">
                <img src="/images/logo.png" alt='profile' />
            </div>
        </div>
    )
}

export default Hero