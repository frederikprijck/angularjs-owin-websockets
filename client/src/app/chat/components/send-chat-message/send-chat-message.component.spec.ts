import * as angular from 'angular';
import 'angular-mocks';
import { SendChatMessage } from './send-chat-message.component';

describe('SendChatMessage', () => {
    var $componentController: any;

    beforeEach(() => {
        angular
            .module('app', [])
            .component('sendChatMessage', new SendChatMessage());
        angular.mock.module('app');
    });

    beforeEach(angular.mock.inject(function(_$componentController_: any) {
        $componentController = _$componentController_;
    }));

    it('should call `onSend` binding after submitting', () => {

        var bindings = {onSend: () => {}};
        spyOn(bindings, 'onSend');
        var ctrl = $componentController('sendChatMessage', null, bindings);

        ctrl.message = 'Hi there';
        ctrl.submit();

        expect(bindings.onSend).toHaveBeenCalledWith({ message: 'Hi there' });
    });

    it('should call `onSend` binding after submitting and send the message', () => {

        var bindings = {onSend: () => {}};
        spyOn(bindings, 'onSend');
        var ctrl = $componentController('sendChatMessage', null, bindings);

        ctrl.submit();

        expect(bindings.onSend).toHaveBeenCalled();
    });

    it('should clear `message` after submitting', () => {
        var bindings = {onSend: () => {}};
        var ctrl = $componentController('sendChatMessage', null, bindings);

        ctrl.submit();
        
        expect(ctrl.message).toBe('');
    });
});
