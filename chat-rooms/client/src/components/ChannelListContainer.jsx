import { ChannelList, useChatContext } from "stream-chat-react";
import ChatIcon from "../assets/chat.png";
import LogoutIcon from "../assets/logout.png";
import StreamingIcon from "../assets/streaming.png";
import Cookies from "universal-cookie";
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from "./";
import { useState } from "react";

const cookies = new Cookies();

const Sidebar = ({ logout }) => (
    <div className="channel-list__sidebar">
        <div className="channel-list__sidebar__icon1">
            <div className="icon1__inner">
                <img src={ChatIcon} alt="Chat" width="30" />
            </div>
        </div>
        <div className="channel-list__sidebar__icon2">
            <div className="icon1__inner">
                <img src={StreamingIcon} alt="Stream" width="30" />
            </div>
        </div>
        <div className="channel-list__sidebar__icon2">
            <div className="icon1__inner" onClick={logout}>
                <img src={LogoutIcon} alt="Logout" width="30" />
            </div>
        </div>
    </div>
);

const LogoHeader = () => (
    <div className="channel-list__header">
        <p className="channel-list__header__text">Chat-Rooms</p>
    </div>
);

const customChannelTeamFilter = (channel) => {
    return channel.filter((channel) => channel.type === "team");
};
const customChannelMessageFilter = (channel) => {
    return channel.filter((channel) => channel.type === "messaging");
};

const ChannelListContent = ({
    isCreating,
    setIsCreating,
    setCreateType,
    setIsEditing,
    setToggleContainer,
}) => {
    const { client } = useChatContext();

    const logout = () => {
        cookies.remove("token");
        cookies.remove("userId");
        cookies.remove("username");
        cookies.remove("fullName");
        cookies.remove("avatarURL");
        cookies.remove("hashedPassword");
        cookies.remove("phoneNumber");

        window.location.reload();
    };

    const filters = { members: { $in: [client.userID] } };

    return (
        <>
            <Sidebar logout={logout} />
            <div className="channel-list__list__wrapper">
                <LogoHeader />
                <div className="profile">
                    <img
                        className="profile-logo"
                        src={
                            cookies.get("avatarURL")
                                ? cookies.get("avatarURL")
                                : "https://scontent.fdac134-1.fna.fbcdn.net/v/t1.18169-9/14947636_223171558096065_7483305311466817987_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=sOovBKxNBv0AX9S0YX5&_nc_ht=scontent.fdac134-1.fna&oh=c574bd29edc5b1cac8b186d264bd3ef5&oe=6186344E"
                        }
                        alt=""
                    />
                    <h2 className="profile-name">{cookies.get("username")}</h2>
                </div>
                <ChannelSearch setToggleContainer={setToggleContainer} />
                <ChannelList
                    filters={filters}
                    channelRenderFilterFn={customChannelTeamFilter}
                    List={(listProps) => (
                        <TeamChannelList
                            {...listProps}
                            type="team"
                            isCreating={isCreating}
                            setIsCreating={setIsCreating}
                            setCreateType={setCreateType}
                            setIsEditing={setIsEditing}
                            setToggleContainer={setToggleContainer}
                        />
                    )}
                    Preview={(previewProps) => (
                        <TeamChannelPreview
                            {...previewProps}
                            setIsCreating={setIsCreating}
                            setIsEditing={setIsEditing}
                            type="team"
                            setToggleContainer={setToggleContainer}
                        />
                    )}
                />
                <ChannelList
                    filters={filters}
                    channelRenderFilterFn={customChannelMessageFilter}
                    List={(listProps) => (
                        <TeamChannelList
                            {...listProps}
                            type="messaging"
                            isCreating={isCreating}
                            setIsCreating={setIsCreating}
                            setCreateType={setCreateType}
                            setIsEditing={setIsEditing}
                            setToggleContainer={setToggleContainer}
                        />
                    )}
                    Preview={(previewProps) => (
                        <TeamChannelPreview
                            {...previewProps}
                            setIsCreating={setIsCreating}
                            setIsEditing={setIsEditing}
                            type="messaging"
                            setToggleContainer={setToggleContainer}
                        />
                    )}
                />
            </div>
        </>
    );
};

export default function ChannelListContainer({ setCreateType, setIsCreating, setIsEditing }) {
    const [toggleContainer, setToggleContainer] = useState(false);

    return (
        <>
            <div className="channel-list__container">
                <ChannelListContent
                    setIsCreating={setIsCreating}
                    setCreateType={setCreateType}
                    setIsEditing={setIsEditing}
                />
            </div>
            <div
                className="channel-list__container-responsive"
                style={{ left: toggleContainer ? "0%" : "-89%", backgroundColor: "#005fff" }}
            >
                <div
                    className="channel-list__container-toggle"
                    onClick={() =>
                        setToggleContainer((prevToggleContainer) => !prevToggleContainer)
                    }
                ></div>
                <ChannelListContent
                    setIsCreating={setIsCreating}
                    setCreateType={setCreateType}
                    setIsEditing={setIsEditing}
                    setToggleContainer={setToggleContainer}
                />
            </div>
        </>
    );
}
