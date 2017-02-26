import { WSFactoryService } from './ws-factory.service';
import { Subject } from 'rxjs/Rx';

export class RealTimeMessage {
  type: string;
  payload: any;
}

export enum RealTimeStatus {
    open,
    closed
}

export class RealTimeService {

    isOpen = false;
    socket: WebSocket;

    message$: Subject<RealTimeMessage> = new Subject<RealTimeMessage>();
    status$: Subject<RealTimeStatus> = new Subject<RealTimeStatus>();

    constructor(
        private wsFactoryService: WSFactoryService,
        private $rootScope: ng.IScope
    ) {

    }

    open() {
        this.socket = this.wsFactoryService.create();

        this.socket.onopen = (event) => {
            this.status$.next(RealTimeStatus.open);
        };

        this.socket.onclose = (event) => {
            this.status$.next(RealTimeStatus.closed);
        };

        this.socket.onerror = (errorEvent) => {
            console.log(errorEvent);
        };

        this.socket.onmessage = (messageEvent) => {
            this.message$.next(JSON.parse(messageEvent.data));
            this.$rootScope.$evalAsync();
        };
    }

    send(message: string) {
        this.socket.send(message);
    }
}
