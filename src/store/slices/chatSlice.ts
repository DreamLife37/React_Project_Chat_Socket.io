import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {api} from "../../api";

export const createConnection = createAsyncThunk(
    'chat/createConnection',
    async (_, {dispatch}) => {
        api.createConnection()
        api.subscribe((messages) => {
            console.log('messagesReceived', messages)
            dispatch(messagesReceived(messages))
        }, (message) => {
            console.log('newMessageReceived', message)
            dispatch(newMessageReceived(message))
        })
    })


export const destroyConnection = createAsyncThunk(
    'chat/destroyConnection',
    async (_, {dispatch}) => {
        api.destroyConnection()
    })

export const sendName = createAsyncThunk(
    'chat/sendName',
    async (param: { name: string }, {dispatch}) => {
        api.sendName(param.name)
    }
)

export const sendMessage = createAsyncThunk(
    'chat/sendMessage', async (param: { message: string }, {dispatch}) => {
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
    message: {} as MessageItemType
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
        }
    }
})

export const {messagesReceived, newMessageReceived} = chatSlice.actions

export const chatReducer = chatSlice.reducer