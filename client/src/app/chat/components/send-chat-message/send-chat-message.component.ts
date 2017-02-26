// temporary, until https://github.com/Microsoft/TypeScript/issues/10178 is implemented
import * as angular from 'angular';
import { ChatService } from './../../services/chat.service';

class SendChatMessageController {

    message: string;
    onSend: ($event: {message: string}) => void;

    submit() {
        this.onSend({message: this.message});
        this.message = '';
    }
}

export class SendChatMessage implements angular.IComponentOptions {
    bindings: any;
    controller: any;
    template: string;

    constructor() {
        this.bindings = {
            onSend: '&'
        };
        this.controller = SendChatMessageController;
        this.template = `
        <form ng-submit="$ctrl.submit()">
          <input type="text" name="message" ng-model="$ctrl.message">
          <button type="submit">Send</button>
        </form>
        `;
    }
}
