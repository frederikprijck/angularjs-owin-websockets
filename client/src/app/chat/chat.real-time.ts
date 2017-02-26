import { WSFactoryServiceProvider } from './../real-time/services/ws-factory.service.provider';

export const realTimeConfig = (wsFactoryServiceProvider: WSFactoryServiceProvider) => {

    const host = 'ws://localhost:55357/ws';

    wsFactoryServiceProvider.setDefaultOptions({
        host
    });
};
