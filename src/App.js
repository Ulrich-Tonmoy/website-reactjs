import "./App.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import ColorGenerator from "./apps/color-generator/ColorGenerator";
import StripeSubmenu from "./apps/stripe-submenus/StripeSubmenu";
import Cocktails from "./apps/cocktails/Cocktails";
import Home from "./pages/Home";
import Error from "./pages/Error";
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
                <Route exact path="/website-reactjs/cocktails">
                    <Cocktails />
                </Route>
                <Route exact path="*">
                    <Error />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
