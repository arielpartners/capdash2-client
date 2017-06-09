import { browser, element, by } from 'protractor';

export class E2EHelpers {

  getItem(item, obj) {
    if (item in obj) {
      return obj[item];
    } else {
      for (const prop in obj) {
        if (obj.hasOwnProperty(prop)) {
          if (obj[prop].children) {
            const found = this.getItem(item, obj[prop].children);
            if (found) {
              return found;
            }
          }
        }
      }
    }
  }

  getChild(item, obj) {
    const children = this.getItem(item, obj).children;
    for (const prop in children) {
      if (children.hasOwnProperty(prop)) {
        if (children[prop].element) {
          return children[prop];
        }
      }
    }
  }

  hasClass (classList, cssClass) {
    return classList.indexOf(cssClass) !== -1;
  }
}
