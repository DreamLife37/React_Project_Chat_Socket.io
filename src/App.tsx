import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import {createConnection, destroyConnection, sendMessage, sendName} from "./store/slices/chatSlice";
import {useAppDispatch, useAppSelector} from "./hooks/redux-hooks";
import {InputName} from "./inputName/InputName";
import {Chat} from "./chatPage/chat/Chat";
import {InputMessage} from "./chatPage/inputMessage/InputMessage";
import {Route, Routes} from 'react-router-dom';
import {ChatPage} from "./chatPage/ChatPage";

function App() {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(createConnection())
        return () => {
            destroyConnection()
        }
    }, [dispatch])

    return (
        <div className="App">
            <header className="App-header">
                <Routes>
                    <Route path={'/inputName'} element={<InputName/>}/>
                    <Route path={'/'} element={<InputName/>}/>
                    <Route path={'/chat'} element={<ChatPage/>}/>
                </Routes>
            </header>
        </div>
    );
}

export default App;
