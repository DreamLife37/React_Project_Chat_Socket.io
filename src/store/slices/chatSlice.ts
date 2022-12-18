import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {api} from "../../api";

export const createConnection = createAsyncThunk(
    'chat/createConnection',
    async (_, {dispatch}) => {
        api.createConnection()
        api.subscribe((messages) => {
                dispatch(messagesReceived(messages))
            },
            (message) => {
                console.log(message)
                dispatch(newMessageReceived(message))
            }
        )
        // api.connected((id) => {
        //     dispatch(setUserId(id))
        // })
    })


export const destroyConnection = createAsyncThunk(
    'chat/destroyConnection',
    async (_, {dispatch}) => {
        api.destroyConnection()
    })

export const logout = createAsyncThunk(
    'chat/destroyConnection',
    async (_, {dispatch}) => {
        localStorage.removeItem('username')
        localStorage.removeItem('userId')
        dispatch(setName(''))
        dispatch(setUserId(''))
    })

export const sendName = createAsyncThunk(
    'chat/sendName',
    async (param: { name: string, userId: string }, {dispatch}) => {
        api.sendName(param.name, param.userId)
        dispatch(setName(param.name))
        dispatch(setUserId(param.userId))
    }
)

export const sendMessage = createAsyncThunk(
    'chat/sendMessage', async (param: { message: string }) => {
        api.sendMessage(param.message)
    }
)

export type MessageItemType = {
    id: string,
    message: string,
    user: { name: string, id: string }
}

const initialState = {
    messages: [{}] as Array<MessageItemType>,
    message: {} as MessageItemType,
    name: '',
    userId: ''
}

const chatSlice = createSlice({
    name: 'chatSlice',
    initialState,
    reducers: {
        messagesReceived(state, action) {
            state.messages = action.payload
        },
        newMessageReceived(state, action) {
            state.messages = [...state.messages, action.payload]
        },
        setName(state, action) {
            state.name = action.payload
        },
        setUserId(state, action) {
            state.userId = action.payload
        },
    }
})

export const {messagesReceived, newMessageReceived, setName, setUserId} = chatSlice.actions

export const chatReducer = chatSlice.reducer