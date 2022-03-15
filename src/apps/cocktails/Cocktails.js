import "./cocktails.css";
import { Route, Routes } from "react-router-dom";
import { AppProvider } from "./context";
import CocktailsHome from "./pages/CocktailsHome";
import About from "./pages/About";
import SingleCocktail from "./pages/SingleCocktail";
import Navbar from "./components/Navbar";
function Cocktails() {
    return (
        <AppProvider>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<CocktailsHome />} />
                <Route exact path="about" element={<About />} />
                <Route exact path="cocktail/:id" element={<SingleCocktail />} />
            </Routes>
        </AppProvider>
    );
}

export default Cocktails;
