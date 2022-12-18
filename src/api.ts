import {io, Socket} from "socket.io-client";
import {DefaultEventsMap} from "socket.io/dist/typed-events";


export const api = {
    socket: null as null | Socket<DefaultEventsMap, DefaultEventsMap>,
    createConnection() {
        this.socket = io('http://localhost:3009/')
    },

    subscribe(initMessagesHandler: (messages: any) => void,
              newMessageSentHandler: (message: any) => void
    ) {
        this.socket?.on('init-messages-published', initMessagesHandler)
        this.socket?.on('new-message-sent', newMessageSentHandler)
    },

    destroyConnection() {
        this.socket?.disconnect()
    },
    sendName(name: string, userId: string) {
        this.socket?.emit('client-name-sent', name, userId)
    },
    sendMessage(message: string) {
        this.socket?.emit('client-message-sent', message)
    },
    con() {
        this.socket?.emit('list-connected-clients')
    },
    test() {
        this.socket?.on('connect', async () => {
            console.log(`${this.socket?.id} connected`)
            const data = "OptionalData"
            this.socket?.emit("getrooms", data, (rooms: any[]) => {
                rooms.forEach((room, index) => {
                    console.log(`room${index}: `, room)
                });
            })
        })

        this.socket?.on('error', async () => {
            console.log(`${this.socket?.id} error`)
        })
    }
}