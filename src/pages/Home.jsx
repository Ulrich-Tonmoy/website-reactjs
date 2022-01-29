import { Link } from "react-router-dom";
import "./home.css";
import { ReactLogo, ColorImg, StripeImg, CocktailImg, DiscordImg } from "./ImageExport";

export default function Home() {
    return (
        <>
            <div className="home-container">
                <div className="home-header">
                    <img src={ReactLogo} alt="logo" className="home-logo" />
                    <h3 className="home-title">React js Projects:</h3>
                </div>
                <div className="underline"></div>

                <div className="home-main-container">
                    <Link to="/website-reactjs/cocktails">
                        <div className="home-card">
                            <img
                                className="home-project-logo"
                                src={CocktailImg}
                                alt="stripe"
                                style={{ width: "100%" }}
                            />
                            <h4 className="home-project-title">Cocktails</h4>
                        </div>
                    </Link>
                    <Link to="/website-reactjs/gpt-3">
                        <div className="home-card">
                            <img
                                className="home-project-logo"
                                src={CocktailImg}
                                alt="stripe"
                                style={{ width: "100%" }}
                            />
                            <h4 className="home-project-title">GPT-3</h4>
                        </div>
                    </Link>
                    <Link to="/website-reactjs/stripe">
                        <div className="home-card">
                            <img
                                className="home-project-logo"
                                src={StripeImg}
                                alt="stripe"
                                style={{ width: "100%" }}
                            />
                            <h4 className="home-project-title">Stripe SubMenu</h4>
                        </div>
                    </Link>
                    <Link to="/website-reactjs/color">
                        <div className="home-card">
                            <img
                                className="home-project-logo"
                                src={ColorImg}
                                alt="Color"
                                style={{ width: "100%" }}
                            />
                            <h4 className="home-project-title">Color Generator</h4>
                        </div>
                    </Link>
                    <Link to="/website-reactjs/discord">
                        <div className="home-card">
                            <img
                                className="home-project-logo"
                                src={DiscordImg}
                                alt="Color"
                                style={{ width: "100%" }}
                            />
                            <h4 className="home-project-title">Discord</h4>
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
