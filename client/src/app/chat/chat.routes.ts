export const routing = ($stateProvider: angular.ui.IStateProvider) => {

    $stateProvider

      .state('chat', {
        parent: 'app',
        url: '/chat',
        template: '<chat-box></chat-box>'
      });
};
