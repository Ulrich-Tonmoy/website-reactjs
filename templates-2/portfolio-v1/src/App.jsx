import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./components/home/Home";
import Layout from "./components/layout/Layout";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
