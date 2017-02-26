// temporary, until https://github.com/Microsoft/TypeScript/issues/10178 is implemented
import * as angular from 'angular';

/**
 * Services
 */
import { RealTimeService } from './services/real-time.service';

/**
 * Factories
 */
import { WSFactoryServiceProvider } from './services/ws-factory.service.provider';


export const moduleName =
    angular.module('application.realTime', [])

    /**
     * Services
     */
    .provider('wsFactoryService', WSFactoryServiceProvider)

    /**
     * Services
     */
    .service('realTimeService', RealTimeService)

    /**
     * Configuration
     */
    .name;

export * from './real-time.connect';
