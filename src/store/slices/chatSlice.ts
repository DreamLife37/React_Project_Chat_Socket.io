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
                dispatch(newMessageReceived(message))
            }
        )
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
        dispatch(setName(param.name))
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
    name: ''
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
        }
    }
})

export const {messagesReceived, newMessageReceived, setName} = chatSlice.actions

export const chatReducer = chatSlice.reducer