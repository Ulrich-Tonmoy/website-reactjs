import Loader from "react-loaders";
import "./Contact.scss";
import AnimatedLetters from "./../animatedLetters/AnimatedLetters";
import { useRef } from "react";
import { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export default function Contact() {
    const [letterClass, setLetterClass] = useState("text-animate");
    const form = useRef();

    setTimeout(() => {
        setLetterClass("text-animate-hover");
    }, 3000);

    const sendEmail = (e) => {
        e.preventDefault();

        // todo: Use EmailJS or other way to receive email
    };

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in freelance opportunities - especially ambitious or large
                        projects. However, if you have other request or question, don't hesitate to
                        contact me using below form either.
                    </p>
                    <div className="contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input placeholder="Name" type="text" name="name" required />
                                </li>
                                <li className="half">
                                    <input placeholder="Email" type="email" name="email" required />
                                </li>
                                <li>
                                    <input
                                        placeholder="Subject"
                                        type="text"
                                        name="subject"
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        placeholder="Message"
                                        name="message"
                                        required
                                    ></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
                    Name,
                    <br />
                    Bangladesh,
                    <br />
                    Bashundhara r/a <br />
                    Dhaka <br />
                    <br />
                    <span>email@gmail.com</span>
                </div>
                <div className="map-wrap">
                    <MapContainer center={[23.8134905, 90.4219678]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[23.8134905, 90.4219678]}>
                            <Popup>Sloba lives here, come over for a cup of coffee :)</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
}
