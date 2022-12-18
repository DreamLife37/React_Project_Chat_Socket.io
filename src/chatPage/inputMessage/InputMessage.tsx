import {sendMessage} from "../../store/slices/chatSlice";
import React, {useState} from "react";
import {useAppDispatch} from "../../hooks/redux-hooks";
import {Button, Container} from "@chakra-ui/react";
import {Textarea} from '@chakra-ui/react'

export const InputMessage = () => {
    const dispatch = useAppDispatch()
    const [message, setMessage] = useState<any>('')

    const handlerButtonSendMessage = () => {
        dispatch(sendMessage({message}));
        setMessage("")
    }

    return <Container style={{
        paddingTop: '16px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: "center",
        borderRadius: '10px'
    }}>

        <div><Textarea
            value={message}
            onChange={(e) => setMessage(e.currentTarget.value)}
            placeholder='Введите ваше сообщение'/></div>

        {/*<Button onClick={handlerButtonSendMessage}*/}
        {/*        colorScheme='blue'>Отправить</Button>*/}
        <div onClick={handlerButtonSendMessage} style={{cursor: 'pointer'}}>
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" fill={'#ffffff'}>
                <path d="M6 40V8l38 16Zm3-4.65L36.2 24 9 12.5v8.4L21.1 24 9 27Zm0 0V12.5 27Z"/>
            </svg>
        </div>
    </Container>
}