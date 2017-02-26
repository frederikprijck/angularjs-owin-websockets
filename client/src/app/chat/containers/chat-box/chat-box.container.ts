// temporary, until https://github.com/Microsoft/TypeScript/issues/10178 is implemented
import * as angular from 'angular';
import { ChatService } from './../../services/chat.service';

class ChatBoxController {

    items: string[] = [];

    constructor(
        private chatService: ChatService,
        private $scope: ng.IScope
    ) {

    }

    $onInit() {
        this.chatService.onMessageRecieved = (message: string) => {
            this.items.push(message);
            this.$scope.$evalAsync();
        };
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
