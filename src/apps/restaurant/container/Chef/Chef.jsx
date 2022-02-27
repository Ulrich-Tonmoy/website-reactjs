import "./Chef.css";
import { SubHeading } from "../../components";
import { images } from "../../constants";

export default function Chef() {
    return (
        <div className="restaurant__bg restaurant__wrapper section__padding">
            <div className="restaurant__wrapper_img restaurant__wrapper_img-reverse">
                <img src={images.chef} alt="chef_image" />
            </div>
            <div className="restaurant__wrapper_info">
                <SubHeading title="Chef's word" />
                <h1 className="headtext__cormorant">What we believe in</h1>

                <div className="restaurant__chef-content">
                    <div className="restaurant__chef-content_quote">
                        <img src={images.quote} alt="quote_image" />
                        <p className="p__opensans">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .
                        </p>
                    </div>
                    <p className="p__opensans">
                        {" "}
                        auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla
                        scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu.
                        Congue iaculis integer curabitur semper sit nunc.{" "}
                    </p>
                </div>

                <div className="restaurant__chef-sign">
                    <p>Kevin Luo</p>
                    <p className="p__opensans">Chef & Founder</p>
                    <img src={images.sign} alt="sign_image" />
                </div>
            </div>
        </div>
    );
}
