import "./App.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import ColorGenerator from "./apps/color-generator/ColorGenerator";
import StripeSubmenu from "./apps/stripe-submenus/StripeSubmenu";
import Home from "./pages/Home";
import { HomeLogo } from "./pages/ImageExport";

function App() {
    return (
        <Router>
            <Link to="/website-reactjs/">
                <img src={HomeLogo} alt="home" className="home"></img>
            </Link>
            <Switch>
                <Route exact path="/website-reactjs/">
                    <Home />
                </Route>
                <Route exact path="/website-reactjs/color">
                    <ColorGenerator />
                </Route>
                <Route exact path="/website-reactjs/stripe">
                    <StripeSubmenu />
                </Route>
                <Route path="*">
                    <h3 style={{ position: "absolute", top: "44%", left: "40%" }}>404 not found</h3>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
