import { merge } from 'lodash';

import Module from './Module';

export default class ServerModule extends Module {
  // Localization
  public localization?: any[];
  // GraphQL API
  public schema?: any[];
  public createResolversFunc?: any[];
  public createContextFunc?: any[];
  // Middleware
  public beforeware?: any[];
  public middleware?: any[];
  // Shared modules data
  public data?: any;

  constructor(...modules: Array<typeof ServerModule>) {
    super(...modules);
  }

  public get schemas() {
    return this.schema;
  }

  public async createContext(req: any, res: any, connectionParams?: any, webSocket?: any) {
    let context = {};
    for (const createContextFunc of this.createContextFunc) {
      context = merge(context, await createContextFunc({ req, res, connectionParams, webSocket, context }));
    }
    return context;
  }

  public createResolvers(pubsub: any) {
    return merge({}, ...this.createResolversFunc.map(createResolvers => createResolvers(pubsub)));
  }
}
