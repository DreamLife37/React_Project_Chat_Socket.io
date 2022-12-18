import React, {useEffect,} from 'react';
import './App.css';
import {createConnection, destroyConnection, sendName,} from "./store/slices/chatSlice";
import {useAppDispatch,} from "./hooks/redux-hooks";
import {InputName} from "./inputName/InputName";
import {Route, Routes} from 'react-router-dom';
import {ChatPage} from "./chatPage/ChatPage";
import {api} from './api';
import {useLocalStorage} from "./hooks/useLocalStorage";

function App() {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(createConnection())
        return () => {
            destroyConnection()
        }
    }, [dispatch])


    const [username] = useLocalStorage('username', '')
    const [userId] = useLocalStorage('userId', '')

    useEffect(() => {
        api.test()
    }, [])

    useEffect(() => {
        if (username !== 'Anonym' && username !== undefined) {
            dispatch(sendName({name: username, userId: userId}))
        }
    }, [username])

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
