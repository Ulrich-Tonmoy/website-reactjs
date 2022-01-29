import "./navbar.css";
import logo from "../../assets/logo.svg";
import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

export default function NavBar() {
    const [toogleMenu, setToogleMenu] = useState(false);

    return (
        <div className="gpt3__navbar">
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links_logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="gpt3__navbar-links_container">
                    <Links />
                </div>
            </div>
            <div className="gpt3__navbar-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
            </div>
            <div className="gpt3__navbar-menu">
                {toogleMenu ? (
                    <RiCloseLine color="#fff" size={27} onClick={() => setToogleMenu(false)} />
                ) : (
                    <RiMenu3Line color="#fff" size={27} onClick={() => setToogleMenu(true)} />
                )}
                {toogleMenu && (
                    <div className="gpt3__navbar-menu_container scale-up-center">
                        <div className="gpt3__navbar-menu_container-links">
                            <Links />
                            <div className="gpt3__navbar-menu_container-links-sign">
                                <p>Sign in</p>
                                <button type="button">Sign up</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

const Links = () => (
    <>
        <p>
            <a href="#home">Home</a>
        </p>
        <p>
            <a href="#wgpt3">What is GPT-3?</a>
        </p>
        <p>
            <a href="#possibility">Open AI</a>
        </p>
        <p>
            <a href="#features">Case Studies</a>
        </p>
        <p>
            <a href="#blog">Library</a>
        </p>
    </>
);
