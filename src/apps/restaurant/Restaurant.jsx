import "./Restaurant.css";
import {
    AboutUs,
    Chef,
    FindUs,
    Footer,
    Gallery,
    Header,
    Intro,
    Laurels,
    SpecialMenu,
} from "./container";
import { Navbar } from "./components";

export default function Restaurant() {
    return (
        <div>
            <Navbar />
            <Header />
            <AboutUs />
            <SpecialMenu />
            <Chef />
            <Intro />
            <Laurels />
            <Gallery />
            <FindUs />
            <Footer />
        </div>
    );
}
