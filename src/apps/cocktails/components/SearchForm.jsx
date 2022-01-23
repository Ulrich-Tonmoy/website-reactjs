import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
    const { setSearchTerm } = useGlobalContext();
    const searchValue = React.useRef("");

    React.useEffect(() => {
        searchValue.current.focus();
    }, []);

    const searchCocktail = () => {
        setSearchTerm(searchValue.current.value);
    };

    return (
        <section className="section cocktail-search">
            <form
                className="search-form"
                onSubmit={(e) => {
                    e.preventDefault();
                }}
            >
                <div className="form-control">
                    <label htmlFor="name">search your favorite cocktail</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        ref={searchValue}
                        onChange={searchCocktail}
                    />
                </div>
            </form>
        </section>
    );
};

export default SearchForm;
