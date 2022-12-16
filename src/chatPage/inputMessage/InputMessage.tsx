import {sendMessage} from "../../store/slices/chatSlice";
import React, {useState} from "react";
import {useAppDispatch} from "../../hooks/redux-hooks";

export const InputMessage = () => {
    const dispatch = useAppDispatch()
    const [message, setMessage] = useState<any>('hello')

    return <div style={{paddingTop: '16px', display: 'flex', justifyContent: 'space-around'}}>
        <textarea value={message}
                  onChange={(e) => setMessage(e.currentTarget.value)}
        />
        <button onClick={() => {
            dispatch(sendMessage({message}));
            setMessage("")
        }}>Отправить
        </button>
    </div>
}