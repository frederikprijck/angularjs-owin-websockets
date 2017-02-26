import { WSFactoryOptions, WSFactoryService } from './ws-factory.service';

export class WSFactoryServiceProvider implements ng.IServiceProvider {

    private defaultOptions: WSFactoryOptions;

    public setDefaultOptions(options: WSFactoryOptions) {
        this.defaultOptions = options;
    }

     public $get() : WSFactoryService {
        return new WSFactoryService(this.defaultOptions);
    }
}
