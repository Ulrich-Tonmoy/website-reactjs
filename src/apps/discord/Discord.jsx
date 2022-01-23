import Sidebar from "./components/Sidebar";
import "./Discord.css";
import ChannelBar from "./components/ChannelBar";
import ContentContainer from "./components/ContentContainer";

export default function Discord() {
    return (
        <div className="flex">
            <Sidebar />
            <ChannelBar />
            <ContentContainer />
        </div>
    );
}
