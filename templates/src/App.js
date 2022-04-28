import "./App.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import ColorGenerator from "./apps/color-generator/ColorGenerator";
import StripeSubmenu from "./apps/stripe-submenus/StripeSubmenu";
import Cocktails from "./apps/cocktails/Cocktails";
import Home from "./pages/Home";
import Error from "./pages/Error";
import { HomeLogo } from "./pages/ImageExport";
import Discord from "./apps/discord/Discord";
import GPT3 from "./apps/gtp-3/GPT3";
import Restaurant from "./apps/restaurant/Restaurant";

function App() {
    return (
        <Router>
            <Link to="/website-reactjs/">
                <img src={HomeLogo} alt="home" className="home"></img>
            </Link>
            <Routes>
                <Route exact path="/website-reactjs/" element={<Home />} />
                <Route exact path="/website-reactjs/color" element={<ColorGenerator />} />
                <Route exact path="/website-reactjs/stripe" element={<StripeSubmenu />} />
                <Route exact path="/website-reactjs/cocktails/*" element={<Cocktails />} />
                <Route exact path="/website-reactjs/discord" element={<Discord />} />
                <Route exact path="/website-reactjs/gpt-3" element={<GPT3 />} />
                <Route exact path="/website-reactjs/restaurant" element={<Restaurant />} />
                <Route exact path="*" element={<Error />} />
            </Routes>
        </Router>
    );
}

export default App;
