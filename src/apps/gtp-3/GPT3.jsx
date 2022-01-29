import "./gpt3.css";
import NavBar from "./components/navbar/NavBar";
import Header from "./container/header/Header";
import Brand from "./components/brand/Brand";
import WhatGPT3 from "./container/WhatGPT3/WhatGPT3";
import Features from "./container/features/Features";
import Possibility from "./container/possibility/Possibility";
import CTA from "./components/cta/CTA";
import Blog from "./container/blog/Blog";
import Footer from "./container/footer/Footer";

export default function GPT3() {
    return (
        <div className="body App">
            <div className="gradient__bg">
                <NavBar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    );
}
