import { Link } from "react-router-dom";
import "./home.css";
import { ReactLogo, ColorImg, StripeImg } from "./ImageExport";

export default function Home() {
    return (
        <>
            <div className="home-container">
                <div className="home-header">
                    <img src={ReactLogo} alt="logo" className="home-logo" />
                    <h3 className="home-title">React js Projects:</h3>
                </div>
                <div class="underline"></div>

                <div class="home-main-container">
                    <Link to="/stripe">
                        <div class="home-card">
                            <img
                                className="home-project-logo"
                                src={StripeImg}
                                alt="stripe"
                                style={{ width: "100%" }}
                            />
                            <h4 className="home-project-title">Stripe SubMenu</h4>
                        </div>
                    </Link>
                    <Link to="/color">
                        <div class="home-card">
                            <img
                                className="home-project-logo"
                                src={ColorImg}
                                alt="Color"
                                style={{ width: "100%" }}
                            />
                            <h4 className="home-project-title">Color Generator</h4>
                        </div>
                    </Link>
                </div>
                <footer>
                    <a
                        target="_blank"
                        href="https://github.com/Ulrich-Tonmoy/website-reactjs"
                        rel="noreferrer"
                    >
                        <h4>Github</h4>
                    </a>
                </footer>
            </div>
        </>
    );
}
