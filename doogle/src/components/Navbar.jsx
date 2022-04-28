import { Link } from "react-router-dom";
import Search from "./Search";

export default function Navbar({ setDarkTheme, darkTheme }) {
    return (
        <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200">
            <div className="flex justify-between items-center space-x-5 w-screen">
                <Link to="/">
                    <p className="text-2xl bg-green-500 font-bold text-white py-1 px-2 rounded dark:text-gray-900 dark:bg-blue-500">
                        Doogle🔍
                    </p>
                </Link>
                <button
                    type="button"
                    onClick={() => setDarkTheme(!darkTheme)}
                    className="text-xl bg-gray-800 dark:bg-white text-white dark:text-gray-900 rounded-full px-2 py-1 hover:shadow-lg"
                >
                    {darkTheme ? "Light🌞" : "Dark🌚"}
                </button>
            </div>
            <Search />
        </div>
    );
}
