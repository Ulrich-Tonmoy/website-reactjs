import React from "react";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";

const CocktailsHome = () => {
    return (
        <main>
            <SearchForm />
            <CocktailList />
        </main>
    );
};

export default CocktailsHome;
