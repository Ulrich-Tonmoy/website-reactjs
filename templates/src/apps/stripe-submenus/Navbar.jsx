import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Navbar = () => {
    const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

    const displaySubmenu = (e) => {
        const page = e.target.textContent;
        const tempBtn = e.target.getBoundingClientRect();
        const center = (tempBtn.left + tempBtn.right) / 2;
        const bottom = tempBtn.bottom - 3;
        openSubmenu(page, { center, bottom });
    };
    const handleSubmenu = (e) => {
        if (!e.target.classList.contains("sub-link-btn")) {
            closeSubmenu();
        }
    };

    return (
        <nav className="sub-nav" onMouseOver={handleSubmenu}>
            <div className="sub-nav-center">
                <div className="sub-nav-header">
                    <img src={logo} className="sub-nav-logo" alt="" />
                    <button className="sub-btn sub-toggle-btn" onClick={openSidebar}>
                        <FaBars />
                    </button>
                </div>
                <ul className="sub-nav-links">
                    <li>
                        <button className="sub-link-btn" onMouseOver={displaySubmenu}>
                            products
                        </button>
                    </li>
                    <li>
                        <button className="sub-link-btn" onMouseOver={displaySubmenu}>
                            developers
                        </button>
                    </li>
                    <li>
                        <button className="sub-link-btn" onMouseOver={displaySubmenu}>
                            company
                        </button>
                    </li>
                </ul>
                <button className="sub-btn sub-signin-btn">Sign in</button>
            </div>
        </nav>
    );
};

export default Navbar;
