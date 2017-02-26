// temporary, until https://github.com/Microsoft/TypeScript/issues/10178 is implemented
import * as angular from 'angular';

export class ChatList implements angular.IComponentOptions {
    bindings: any;
    template: string;

    constructor() {
        this.bindings = {
            items: '<'
        };
        this.template = `
        <div ng-repeat="item in $ctrl.items track by $index">
          {{ item }}
        </div>
        `;
    }
}
