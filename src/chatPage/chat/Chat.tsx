import React, {useEffect, useRef} from "react";
import {useAppSelector} from "../../hooks/redux-hooks";
import {Item} from "./item/Item";
import {Navigate, useNavigate} from "react-router-dom";

export const Chat = () => {
    const messages = useAppSelector(state => state.messages)
    const name = useAppSelector(state => state.name)
    const messagesAnchorBlockRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        messagesAnchorBlockRef.current?.scrollIntoView({behavior: "smooth"})
    }, [messages])
    if (name.length === 0) {
        return <Navigate to={"/inputName"}/>
    }
    return <div>
        <div style={{
            border: '1px solid white',
            padding: '10px',
            height: '300px',
            width: '280px',
            overflowY: 'scroll',
            display: 'flex',
            flexDirection: "column",
            alignItems: 'center'
        }}
        >
            {messages.map((i, index) => {
                return <Item user={i} key={index}/>
            })}
            <div ref={messagesAnchorBlockRef}></div>
        </div>
    </div>
}