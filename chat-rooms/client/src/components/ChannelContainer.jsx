import { ChannelInner, CreateChannel, EditChannel } from "./";
import { Channel, MessageTeam, useChatContext } from "stream-chat-react";

export default function ChannelContainer({
    isCreating,
    setIsCreating,
    isEditing,
    setIsEditing,
    createType,
}) {
    const { channel } = useChatContext();

    if (isCreating) {
        return (
            <div className="channel__container">
                <CreateChannel createType={createType} setIsCreating={setIsCreating} />
            </div>
        );
    }

    if (isEditing) {
        return (
            <div className="channel__container">
                <EditChannel setIsEditing={setIsEditing} />
            </div>
        );
    }

    const EmptyState = () => (
        <div className="channel-empty__container">
            <p className="channel-empty__first">This is the start of your chat history.</p>
            <p className="channel-empty__second">
                Send messages, attachments, links, emojis, and more!
            </p>
        </div>
    );

    return (
        <div className="channel__container">
            <Channel
                EmptyStateIndicator={EmptyState}
                Message={(messageProps, i) => <MessageTeam key={i} {...messageProps} />}
            >
                <ChannelInner setIsEditing={setIsEditing} />
            </Channel>
        </div>
    );
}
