import "./cocktails.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AppProvider } from "./context";
import Home from "./pages/Home";
import About from "./pages/About";
import SingleCocktail from "./pages/SingleCocktail";

import Navbar from "./components/Navbar";
function Cocktails() {
    return (
        <AppProvider>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/website-reactjs/cocktails">
                        <Home />
                    </Route>
                    <Route exact path="/website-reactjs/cocktails/about">
                        <About />
                    </Route>
                    <Route exact path="/website-reactjs/cocktails/cocktail/:id">
                        <SingleCocktail />
                    </Route>
                </Switch>
            </Router>
        </AppProvider>
    );
}

export default Cocktails;
