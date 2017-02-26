export interface WSFactoryOptions {
    host: string;
}

export class WSFactoryService {

    constructor(
        private options: WSFactoryOptions
    ) { }

    create(options?: WSFactoryOptions) {
        const opts = Object.assign({}, this.options, options);
        return new WebSocket(opts.host);
    }
}
