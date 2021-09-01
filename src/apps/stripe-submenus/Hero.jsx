import phoneImg from "./images/phone.svg";
import { useGlobalContext } from "./context";

const Hero = () => {
    const { closeSubmenu } = useGlobalContext();

    return (
        <section className="sub-hero" onMouseOver={closeSubmenu}>
            <div className="sub-hero-center">
                <article className="sub-hero-info">
                    <h1 className="sub-h1">
                        Payments infrastructure <br />
                        for the internet
                    </h1>
                    <p className="sub-p">
                        Millions of companies of all sizes—from startups to Fortune 500s—use
                        Stripe’s software and APIs to accept payments, send payouts, and manage
                        their businesses online.
                    </p>
                    <button className="sub-btn">Start now</button>
                </article>
                <article className="sub-hero-images">
                    <img src={phoneImg} className="sub-phone-img" alt="phone" />
                </article>
            </div>
        </section>
    );
};

export default Hero;
