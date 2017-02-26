// temporary, until https://github.com/Microsoft/TypeScript/issues/10178 is implemented
import * as angular from 'angular';
import { RealTimeService } from './../../real-time/services/real-time.service';

export class ChatService {

    onMessageRecieved: Function;

    constructor(
        private realTimeService: RealTimeService
    ) {
        this.realTimeService.onMessageRecieved = (message: string) => {
            this.onMessageRecieved(message);
        };
    }

    sendMessage(message: string) {
        if (this.realTimeService) {
            this.realTimeService.send(message);
        }
    }
}
