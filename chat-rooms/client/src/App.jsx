import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import "stream-chat-react/dist/css/index.css";
import "./App.css";
import { ChannelContainer, ChannelListContainer, Auth } from "./components";
import Cookies from "universal-cookie";
import { useState } from "react";

const cookies = new Cookies();
const authToken = cookies.get("token");

const apiKey = "cyvh2avkafnc";
const client = StreamChat.getInstance(apiKey);

if (authToken) {
    client.connectUser(
        {
            id: cookies.get("userId"),
            name: cookies.get("username"),
            fullName: cookies.get("fullName"),
            image: cookies.get("avatarURL"),
            hashedPassword: cookies.get("hashedPassword"),
            phoneNumber: cookies.get("phoneNumber"),
        },
        authToken
    );
}

function App() {
    const [createType, setCreateType] = useState("");
    const [isCreating, setIsCreating] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    if (!authToken) return <Auth />;

    return (
        <div className="app__wrapper">
            <Chat client={client} theme="team light">
                <ChannelListContainer
                    isCreating={isCreating}
                    setIsCreating={setIsCreating}
                    setCreateType={setCreateType}
                    setIsEditing={setIsEditing}
                />
                <ChannelContainer
                    isCreating={isCreating}
                    setIsCreating={setIsCreating}
                    isEditing={isEditing}
                    setIsEditing={setIsEditing}
                    createType={createType}
                />
            </Chat>
        </div>
    );
}

export default App;
