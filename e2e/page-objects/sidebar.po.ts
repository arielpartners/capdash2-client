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

  getItem(item) {
    return this.items[item];
  }

  getSubItem(subItem, item) {
    return this.items[item].subItems[subItem];
  }
}
