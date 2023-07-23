import './index.scss'
import { useState } from 'react'
import LogoS from '../../assets/images/logo-s-4.png'
import LogoSubtitle from '../../assets/images/logo_sub_4.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faGithub,
    // faYoutube,
    // faTwitter,
    faDev,
    // faSkype,
} from '@fortawesome/free-brands-svg-icons'
import {
    faHome,
    faUser,
    faEnvelope,
    faSuitcase,
    faBars,
    faClose,
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="nav-bar">
        <Link 
            className="logo"
            to="/" 
            //</div>onClick={() => setShowNav(false)}
        >
            <img src={LogoS} alt="Logo" />
            <img className="sub-logo" src={LogoSubtitle} alt="debaditya" />
        </Link>
        <nav>
        {/* <nav className={showNav ? 'mobile-show' : ''}> */}
            <NavLink 
                exact="true"
                activeclassname="active"
                to="/"
                //onClick={() => setShowNav(false)}
            >
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink 
                exact = "true"
                activeclassname="active"
                className="about-link"
                to="/about"
                // onClick={() => setShowNav(false)}
            >
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            {/* <NavLink
                activeclassname="active"
                className="portfolio-link"
                to="/portfolio"
                // onClick={() => setShowNav(false)}
            >
                <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
            </NavLink> */}
            <NavLink
                exact = "true"
                activeclassname="active"
                className="contact-link"
                to="/contact"
                // onClick={() => setShowNav(false)}
            >
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
                {/* <FontAwesomeIcon 
                    // onClick={() => setShowNav(false)}
                    icon={faClose}
                    color="#ffd700"
                    size="3x"
                    className='close-icon' 
                /> */}
        </nav>
        <ul>
            <li>
                <a href="https://www.linkedin.com/in/debaditya-singh-402846198/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon
                        icon={faLinkedin}
                        color="#4d4d4e"
                        className="anchor-icon"
                    />
                </a>
            </li>
            <li>
                <a href="https://github.com/debadityasingh8972"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon
                        icon={faGithub}
                        color="#4d4d4e"
                        className="anchor-icon"
                    />
                </a>
            </li>
            <li>
                <a href="https://twitter.com/debaditya5972?t=2Ai5S2JO1WSmwnfVj7DkXg&s=09"
                    rel="noreferrer"
                    target="_blank"
                >
                    <FontAwesomeIcon
                        icon={faTwitter}
                        color="#4d4d4e"
                        className="anchor-icon"
                    />
                </a>
            </li>
            <li>
                <a href="https://app.daily.dev/debaditya_139" rel="noreferrer" target="_blank">
                    <FontAwesomeIcon
                        icon={faDev}
                        color="#4d4d4e"
                        className="anchor-icon"
                    />
                </a>
            </li>
        </ul>
        <FontAwesomeIcon 
                onClick={() => setShowNav(true)}
                icon={faBars}
                color="#ffd700"
                size="3x"
                className='hamburger-icon' 
        />
    </div>
    )
}

export default Sidebar