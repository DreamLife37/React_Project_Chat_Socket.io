import {configureStore} from "@reduxjs/toolkit";
import {chatReducer} from "./slices/chatSlice";

export const store = configureStore({reducer: chatReducer})

export type AppRootStateType = ReturnType<typeof store.getState>
export type AppDispatchType = typeof store.dispatch


// @ts-ignore
window.store = store