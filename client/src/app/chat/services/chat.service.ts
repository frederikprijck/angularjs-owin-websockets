// temporary, until https://github.com/Microsoft/TypeScript/issues/10178 is implemented
import * as angular from 'angular';
import { RealTimeService, RealTimeMessage } from './../../real-time/services/real-time.service';
import { Observable } from 'rxjs/Observable';

export class ChatMessage {
    message: string;
    user: string;
}

export class ChatService {

    chatMessage$: Observable<ChatMessage>;

    constructor(
        private realTimeService: RealTimeService
    ) {
        this.chatMessage$ = this.realTimeService.message$
            .filter(message => message.type === 'chatMessage')
            .map(message => {
                return {
                    message: message.payload,
                    user: 'unknown'
                };
            });
    }

    sendMessage(message: string) {
        this.realTimeService.send(message);
    }
}
