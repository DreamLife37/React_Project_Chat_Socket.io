import {Chat} from "./chat/Chat";
import {InputMessage} from "./inputMessage/InputMessage";
import React from "react";

export const ChatPage = () => {
    return <div>
        <Chat/>
        <InputMessage/>
    </div>
}