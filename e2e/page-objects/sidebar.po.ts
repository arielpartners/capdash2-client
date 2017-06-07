import { browser, element, by } from 'protractor';

export class SidebarPage {
  items = {
    'Dashboard': {
      element: element(by.css('#sidebar-dashboard')),
      subItems: {
        'Dashboard': {
          element: element(by.css('#sidebar-sub-dashboard')),
          path: 'dashboard'
        }
      }
    },
    'Units': {
      element: element(by.css('#sidebar-units')),
      subItems: {
        'Offline Units': {
          element: element(by.css('#sidebar-units-offline')),
          path: 'units/offline-units'
        },
        'HERO': {
          element: element(by.css('#sidebar-units-hero')),
          path: 'units/hero'
        },
        'L.T.R.': {
          element: element(by.css('#sidebar-units-ltr')),
          path: 'units/ltr'
        },
        'Demand & Projections': {
          element: element(by.css('#sidebar-units-demand')),
          path: 'units/demand'
        }
      }
    },
    'Edit Demand & Projections': {
      element: element(by.css('#sidebar-edit-demand')),
      path: 'edit-demand/edit'
    },
    'Intake/Vacancy Control': {
      element: element(by.css('#sidebar-intake')),
      path: 'ivc'
    },
    'Reports': {
      element: element(by.css('#sidebar-reports')),
      subItems: {
        'General Reports': {
          element: element(by.css('#sidebar-reports-general')),
          path: 'reports/general'
        },
        'Other Reports': {
          element: element(by.css('#sidebar-reports-other')),
          subItems: {
            'Report All': {
              element: element(by.css('#sidebar-reports-other-all')),
              path: 'reports/all'
            }
          }
        }
      }
    },
    'App Settings': {
      element: element(by.css('#sidebar-settings')),
      subItems: {
        'General Settings': {
          element: element(by.css('#sidebar-settings-general')),
          path: 'settings/general'
        }
      }
    },
    'App Help': {
      element: element(by.css('#sidebar-help')),
      subItems: {
        'General Help': {
          element: element(by.css('#sidebar-help-general')),
          path: 'help/general'
        }
      }
    }
  }

  itemLabel = element(by.cssContainingText('a > span', 'Units'))
  minifyBtn = element(by.css('.sidebar-minify-btn'));

  getItem(item) {
    const items = this.items;

    return item in items ? items[item] : this.findItem(item, items);
  }

  findItem(item, itemsObj) {
    for (const menuItem in itemsObj) {
      if (itemsObj[menuItem].subItems) {
        if (itemsObj[menuItem].subItems[item]) {
          return itemsObj[menuItem].subItems[item];
        } else {
          const found = this.findItem(item, itemsObj[menuItem].subItems);
          if (found) {
            return found;
          }
        }
      }
    }
  }

  getSubItem(subItem, item) {
    const items = this.items;

    if (item in items) {
      return items[item].subItems[subItem];
    } else {
      return this.getItem(item).subItems[subItem];
    }
  }
}
