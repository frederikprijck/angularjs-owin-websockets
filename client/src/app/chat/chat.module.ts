// temporary, until https://github.com/Microsoft/TypeScript/issues/10178 is implemented
import * as angular from 'angular';

/**
 * Services
 */
import { ChatService } from './services/chat.service';

/**
 * Components
 */
import { SendChatMessage } from './components/send-chat-message/send-chat-message.component';
import { ChatList } from './components/chat-list/chat-list.component';

/**
 * Containers
 */
import { ChatBox } from './containers/chat-box/chat-box.container';

/**
 * Configuration
 */
import { routing } from './chat.routes';
import { realTimeConfig } from './chat.real-time';

export const moduleName =
    angular.module('application.chat', [
        'ui.router'
    ])

    /**
     * Services
     */
    .service('chatService', ChatService)

    /**
     * Components
     */
    .component('sendChatMessage', new SendChatMessage())
    .component('chatList', new ChatList())

    /**
     * Containers
     */
    .component('chatBox', new ChatBox())

    /**
     * Configuration
     */
    .config(routing)
    .config(realTimeConfig)
    .name;
