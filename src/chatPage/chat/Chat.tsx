import React, {useEffect, useRef} from "react";
import {useAppSelector} from "../../hooks/redux-hooks";
import {Item} from "./item/Item";
import {useNavigate} from "react-router-dom";
import {Box} from "@chakra-ui/react";
import {Logout} from "../Logout";
import {useLocalStorage} from "../../hooks/useLocalStorage";

export const Chat = () => {
    const messages = useAppSelector(state => state.messages)
    const name = useAppSelector(state => state.name)
    const messagesAnchorBlockRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        messagesAnchorBlockRef.current?.scrollIntoView({behavior: "smooth"})
    }, [messages])

    const navigate = useNavigate()

    const [username] = useLocalStorage('username')

    useEffect(() => {
        if (!username) {
            debugger
            navigate("/inputName")
        }
    }, [name])

    return <Box>
        <Logout/>
        <Box boxShadow={"dark-lg"} sx={{
            '&::-webkit-scrollbar': {
                width: '16px',
                borderRadius: '8px',
                backgroundColor: `rgba(255, 255, 255, 0.05)`,
            },
            '&::-webkit-scrollbar-thumb': {
                backgroundColor: `rgb(44, 45, 56)`,
            },
        }}
             style={{
                 marginBottom: '10px',
                 padding: '10px',
                 height: '300px',
                 width: '280px',
                 overflowY: 'auto',
                 display: 'flex',
                 flexDirection: "column",
                 alignItems: 'center',
                 borderRadius: '10px'
             }}
        >
            {messages.map((i, index) => {
                return <Item user={i} key={index}/>
            })}
            <div ref={messagesAnchorBlockRef}></div>
        </Box>
    </Box>
}