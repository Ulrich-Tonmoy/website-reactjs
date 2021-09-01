import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";
import sublinks from "./data";

const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useGlobalContext();

    return (
        <div className={`${isSidebarOpen ? "sub-sidebar-wrapper show" : "sub-sidebar-wrapper"}`}>
            <aside className="sub-sidebar">
                <button className="sub-close-btn" onClick={closeSidebar}>
                    <FaTimes />
                </button>
                <div className="sub-sidebar-links">
                    {sublinks.map((item, index) => {
                        const { links, page } = item;
                        return (
                            <article key={index}>
                                <h4 className="sub-h4">{page}</h4>
                                <div className="sub-sidebar-sublinks">
                                    {links.map((link, index) => {
                                        const { url, icon, label } = link;
                                        return (
                                            <a key={index} href={url}>
                                                {icon}
                                                {label}
                                            </a>
                                        );
                                    })}
                                </div>
                            </article>
                        );
                    })}
                </div>
            </aside>
        </div>
    );
};

export default Sidebar;
