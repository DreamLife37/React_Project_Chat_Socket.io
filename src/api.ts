import {io, Socket} from "socket.io-client";
import {DefaultEventsMap} from "socket.io/dist/typed-events";

export const api = {
    socket: null as null | Socket<DefaultEventsMap, DefaultEventsMap>,
    createConnection() {
        this.socket = io('http://localhost:3009')
    },

    subscribe(initMessagesHandler: (messages: any) => void,
              newMessageSentHandler: (message: any) => void
    ) {
        this.socket?.on('init-messages-published', initMessagesHandler)
        this.socket?.on('new-message-sent', newMessageSentHandler)
    },

    destroyConnection() {
        this.socket?.disconnect()
        this.socket = null
    },
    sendName(name: string, userId: string) {
        this.socket?.emit('client-name-sent', name, userId)
    },
    sendMessage(message: string) {
        this.socket?.emit('client-message-sent', message, (error: string | null) => {
            if (error) alert(error);
        })
    },
}