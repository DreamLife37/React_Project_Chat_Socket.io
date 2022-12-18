import React, {ChangeEvent, useState} from "react";
import {sendName, setName} from "../store/slices/chatSlice";
import {useAppDispatch, useAppSelector} from "../hooks/redux-hooks";
import {useNavigate} from "react-router-dom";
import {Button, Input} from "@chakra-ui/react";
import {useLocalStorage} from "../hooks/useLocalStorage";
import {nanoid} from "@reduxjs/toolkit";

export const InputName = () => {
    const [username, setUsername] = useLocalStorage('username', '')
    const [error, setError] = useState<string>('')
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handlerInputName = (e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.currentTarget.value)
    }

    const id = nanoid(16)

    const [userId] = useLocalStorage('userId', id)

    const handlerButton = () => {
        dispatch(sendName({name: username, userId: userId}))
        navigate('/chat')
    }

    return <div>
        <h2>Добро пожаловать в чат</h2>
        <div>Введите ваше имя</div>

        <div style={{paddingTop: '16px'}}><Input value={username}
                                                 onChange={handlerInputName}
                                                 variant='Outline' placeholder='Ваше имя' width='auto'
                                                 onBlur={() => {
                                                     if (username.trim().length === 0) {
                                                         return setError('Имя не может быть пустым')
                                                     } else setError('')
                                                 }}
                                                 isInvalid={!!error}
                                                 style={{color: '#000000'}}
                                                 errorBorderColor='red.300'/></div>

        <div style={{height: '10px', fontSize: '12px', paddingBottom: '8px', paddingTop: '4px', color: '#c4061b'}}>
            {error && <span>{error}</span>}
        </div>

        <div style={{paddingTop: '16px'}}>
            <Button onClick={handlerButton}
                    colorScheme='blue'>Войти</Button>
        </div>
    </div>
}