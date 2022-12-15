import React, {useEffect, useState} from 'react';
import './App.css';
import {Item} from "./chat/item/Item";
import {socket} from "./api";


function App() {


    useEffect(() => {
        socket.on('init-messages-published', (messages) => {
            debugger
            console.log(messages)
            setMessages(messages)
        })
        socket.on('new-message-sent', (message: any) => {
            console.log(message)

            setMessages((messages) => [...messages, message])
        })

    }, [])


    const [messages, setMessages] = useState<Array<any>>([])
    const [message, setMessage] = useState('hello')
    const [name, setName] = useState('Andrey')


    return (
        <div className="App">
            <header className="App-header">
                <div style={{border: '1px solid white', padding: '10px', height: '300px',width:'280px', overflowY: 'scroll'}}
                     onScroll={(e) => console.log(e.currentTarget)}>
                    {messages.map((i, index) => {
                        return <Item user={i} index={index} key={index}/>
                    })}
                </div>

                <input value={name}
                       onChange={(e) => setName(e.currentTarget.value)}/>
                <button onClick={() => {
                    socket.emit('client-name-sent', name);
                    // setMessage("")
                }}>Send name
                </button>

                <textarea value={message}
                          onChange={(e) => setMessage(e.currentTarget.value)}
                ></textarea>
                <button onClick={() => {
                    socket.emit('client-message-sent', message);
                    setMessage("")
                }}>Отправить
                </button>
            </header>
        </div>
    );
}

export default App;
