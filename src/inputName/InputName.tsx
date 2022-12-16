import React, {ChangeEvent, useState} from "react";
import {sendName, setName} from "../store/slices/chatSlice";
import {useAppDispatch, useAppSelector} from "../hooks/redux-hooks";
import {useNavigate} from "react-router-dom";

export const InputName = () => {
    const [error, setError] = useState<string>('')
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const name = useAppSelector(state => state.name)

    const handlerInputName = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setName(e.currentTarget.value))
    }

    const handlerButton = () => {
        dispatch(sendName({name}))
        navigate('/chat')
    }

    return <div>
        <h2>Добро пожаловать в чат</h2>
        <div>Введите ваше имя</div>
        <input value={name}
               onChange={handlerInputName}
               placeholder={'Ваше имя'}
               onBlur={() => {
                   if (name.trim().length === 0) {
                       return setError('Имя не может быть пустым')
                   } else setError('')
               }}
        />

        <div style={{height: '10px', fontSize: '12px', paddingBottom: '8px', paddingTop: '4px', color: '#c4061b'}}>
            {error && <span>{error}</span>}
        </div>

        <div>
            <button onClick={handlerButton}>Войти
            </button>
        </div>
    </div>
}