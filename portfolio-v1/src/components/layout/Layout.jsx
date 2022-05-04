import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import "./Layout.scss";

export default function Layout() {
    return (
        <div className="Layout">
            <Sidebar />
            <div className="page">
                <span className="tags top-tags">&lt;body&gt;</span>
                <Outlet />
                <span className="tags bottom-tags">
                    &lt;/body&gt;
                    <br />
                    <span className="bottom-tag-html">&lt;/html&gt;</span>
                </span>
            </div>
        </div>
    );
}
