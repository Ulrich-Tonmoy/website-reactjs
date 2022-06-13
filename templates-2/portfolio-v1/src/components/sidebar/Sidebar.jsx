import { Link, NavLink } from "react-router-dom";
import "./Sidebar.scss";
import LogoS from "../../assets/images/logo-s.png";
import LogoSub from "../../assets/images/logo_sub.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faSkype, faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function Sidebar() {
    return (
        <div className="nav-bar">
            <Link className="logo" to="/">
                <img src={LogoS} alt="logo" />
                <img className="sub-logo" src={LogoSub} alt="logo subtitle" />
            </Link>
            <nav>
                <NavLink
                    exact="true"
                    className={(navData) => (navData.isActive ? "active" : "")}
                    to="/"
                >
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink
                    exact="true"
                    className={(navData) => (navData.isActive ? "active" : "about-link")}
                    to="/about"
                >
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink
                    exact="true"
                    className={(navData) => (navData.isActive ? "active" : "contact-link")}
                    to="/contact"
                >
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://linkedin.com">
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://github.com">
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://youtube.com">
                        <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://skype.com">
                        <FontAwesomeIcon icon={faSkype} color="#4d4d4e" />
                    </a>
                </li>
            </ul>
        </div>
    );
}
