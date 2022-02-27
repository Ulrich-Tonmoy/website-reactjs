import "./Newsletter.css";
import SubHeading from "../SubHeading/SubHeading";

export default function Newsletter() {
    return (
        <div className="restaurant__newsletter">
            <div className="restaurant__newsletter-heading">
                <SubHeading title="Newsletter" />
                <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
                <p className="p__opensans">And never miss latest Updates!</p>
            </div>
            <div className="restaurant__newsletter-input flex__center">
                <input type="email" placeholder="Enter your email address" />
                <button type="button" className="custom__button">
                    Subscribe
                </button>
            </div>
        </div>
    );
}
