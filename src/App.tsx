import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import {Item} from "./chat/item/Item";
import {createConnection, sendMessage, sendName} from "./store/slices/chatSlice";
import {useAppDispatch, useAppSelector} from "./hooks/redux-hooks";

function App() {

    const dispatch = useAppDispatch()
    const messages = useAppSelector(state => state.messages)

    const messagesAnchorBlockRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        dispatch(createConnection())
    }, [dispatch])

    useEffect(() => {
        messagesAnchorBlockRef.current?.scrollIntoView({behavior: "smooth"})
    }, [messages])

    const [message, setMessage] = useState<any>('hello')
    const [name, setName] = useState('Andrey')

    return (
        <div className="App">
            <header className="App-header">
                <div style={{
                    border: '1px solid white',
                    padding: '10px',
                    height: '300px',
                    width: '280px',
                    overflowY: 'scroll'
                }}
                >
                    {messages.map((i, index) => {
                        return <Item user={i} key={index}/>
                    })}
                    <div ref={messagesAnchorBlockRef}></div>
                </div>

                <input value={name}
                       onChange={(e) => setName(e.currentTarget.value)}/>
                <button onClick={() => {
                    dispatch(sendName({name}))
                }}>Send name
                </button>

                <textarea value={message}
                          onChange={(e) => setMessage(e.currentTarget.value)}
                />
                <button onClick={() => {
                    dispatch(sendMessage({message}));
                    setMessage("")
                }}>Отправить
                </button>
            </header>
        </div>
    );
}

export default App;
