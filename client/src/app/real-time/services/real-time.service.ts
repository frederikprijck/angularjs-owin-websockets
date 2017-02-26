import { WSFactoryService } from './ws-factory.service';

export class RealTimeService {

    isOpen = false;
    socket: WebSocket;
    onMessageRecieved: Function;

    constructor(
        private wsFactoryService: WSFactoryService
    ) {

    }

    open() {
        this.socket = this.wsFactoryService.create();

        this.socket.onopen = (event) => {
            this.isOpen = true;
        };

        this.socket.onclose = (event) => {
            this.isOpen = false;
        };

        this.socket.onerror = (errorEvent) => {
            console.log(errorEvent);
        };

        this.socket.onmessage = (messageEvent) => {
            if (this.onMessageRecieved) {
                this.onMessageRecieved(messageEvent.data);
            }
        };
    }

    send(message: string) {
        this.socket.send(message);
    }
}
