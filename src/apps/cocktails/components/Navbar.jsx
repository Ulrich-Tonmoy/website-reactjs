import { Link } from "react-router-dom";
import logo from "../logo.svg";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <Link to="/website-reactjs/cocktails">
                    <img src={logo} alt="logo" className="logo" />
                </Link>
                <ul className="nav-links">
                    <li>
                        <Link to="/website-reactjs/cocktails">Home</Link>
                    </li>
                    <li>
                        <Link to="/website-reactjs/cocktails/about">About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
