import "./stripeSubmenu.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Sidebar from "./Sidebar";
import Submenu from "./Submenu";
import { AppProvider } from "./context";
function StripeSubmenu() {
    return (
        <div className="sub-container">
            <AppProvider>
                <Navbar />
                <Sidebar />
                <Hero />
                <Submenu />
            </AppProvider>
        </div>
    );
}

export default StripeSubmenu;
