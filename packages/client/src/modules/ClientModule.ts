import React from 'react';
import BaseModule from './BaseModule';

class ClientModule extends BaseModule {
  public route?: any[];
  public navItem?: any[];
  public navItemRight?: any[];
  public stylesInsert?: any[];
  public scriptsInsert?: any[];

  constructor(...modules: Array<typeof ClientModule>) {
    super(...modules);
  }

  get routes() {
    return this.route.map((component: any, idx: number, items: any) =>
      React.cloneElement(component, { key: component.key || idx + items.length })
    );
  }

  get navItems() {
    return this.navItem.map((component: any, idx: number, items: any) =>
      React.cloneElement(component, {
        key: component.key || idx + items.length
      })
    );
  }

  get navItemsRight() {
    return this.navItemRight.map((component: any, idx: number, items: any) =>
      React.cloneElement(component, {
        key: component.key || idx + items.length
      })
    );
  }

  get stylesInserts() {
    return this.stylesInsert || [];
  }

  get scriptsInserts() {
    return this.scriptsInsert || [];
  }
}

export default ClientModule;
