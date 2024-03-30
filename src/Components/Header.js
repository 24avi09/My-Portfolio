import { Link } from 'react-scroll';

const Header = () => {
    return (
        <div className="header">
            <h3>Abhishekh.dev</h3>
            <div className="header-side-links">
                <ul>
                    <li>
                        <Link to="hero" spy={true} smooth={true} offset={0} duration={1000}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="about" spy={true} smooth={true} offset={-130} duration={800}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="project" spy={true} smooth={true} offset={50} duration={800}>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link to="contact" spy={true} smooth={true} offset={-50} duration={1000}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header