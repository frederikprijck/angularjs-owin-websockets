// temporary, until https://github.com/Microsoft/TypeScript/issues/10178 is implemented
import * as angular from 'angular';
import { ChatService, ChatMessage } from './../../services/chat.service';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

class ChatBoxController {

    items: ChatMessage[] = [];
    onDestroy$: Subject<any> = new Subject();

    constructor(
        private chatService: ChatService,
        private $scope: ng.IScope
    ) {

    }

    $onInit() {
        this.chatService.chatMessage$
            .takeUntil(this.onDestroy$.concat(Observable.of(0)))
            .subscribe(message => this.items.push(message));
    }

    $onDestroy() {
        this.onDestroy$.complete();
    }

    send(message: string) {
        this.chatService.sendMessage(message);
    }
}

export class ChatBox implements angular.IComponentOptions {
    controller: any;
    template: string;

    constructor() {
        this.controller = ChatBoxController;
        this.template = `
        <chat-list items="$ctrl.items"></chat-list>
        <send-chat-message on-send="$ctrl.send(message)"></send-chat-message>
        `;
    }
}
