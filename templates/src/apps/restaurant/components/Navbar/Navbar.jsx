import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import "./Navbar.css";
import { useState } from "react";

export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className="restaurant__navbar">
            <div className="restaurant__navbar-logo">
                <img src={images.gericht} alt="restaurant logo" />
            </div>
            <ul className="restaurant__navbar-links">
                <li className="p__opensans">
                    <a href="#home">Home</a>
                </li>
                <li className="p__opensans">
                    <a href="#about">About</a>
                </li>
                <li className="p__opensans">
                    <a href="#menu">Menu</a>
                </li>
                <li className="p__opensans">
                    <a href="#awards">Awards</a>
                </li>
                <li className="p__opensans">
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            <div className="restaurant__navbar-login">
                <a href="#login" className="p__opensans">
                    Log In / Registration
                </a>
                <div />
                <a href="/" className="p__opensans">
                    Book Table
                </a>
            </div>
            <div className="restaurant__navbar-smallscreen">
                <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
                {toggleMenu && (
                    <div className="restaurant__navbar-smallscreen_overlay flex__center slide-bottom">
                        <MdOutlineRestaurantMenu
                            color="#fff"
                            fontSize={27}
                            className="overlay__close"
                            onClick={() => setToggleMenu(false)}
                        />

                        <ul className="restaurant__navbar-smallscreen-links">
                            <li>
                                <a href="#home" onClick={() => setToggleMenu(false)}>
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#about" onClick={() => setToggleMenu(false)}>
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#menu" onClick={() => setToggleMenu(false)}>
                                    Menu
                                </a>
                            </li>
                            <li>
                                <a href="#awards" onClick={() => setToggleMenu(false)}>
                                    Awards
                                </a>
                            </li>
                            <li>
                                <a href="#contact" onClick={() => setToggleMenu(false)}>
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
}
