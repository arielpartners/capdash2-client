import { browser, element, by } from 'protractor';
import { E2EHelpers } from '../support/e2eHelpers';

const helpers = new E2EHelpers();

export class SidebarPage {
  items = {
    'Dashboard': {
      element: element(by.css('#sidebar-dashboard')),
      'Main Dashboard': {
        element: element(by.css('#sidebar-sub-dashboard')),
        path: 'dashboard'
      }
    },
    'Units': {
      element: element(by.css('#sidebar-units')),
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
      'General Reports': {
        element: element(by.css('#sidebar-reports-general')),
        path: 'reports/general'
      },
      'Other Reports': {
        element: element(by.css('#sidebar-reports-other')),
        'Report All': {
          element: element(by.css('#sidebar-reports-other-all')),
          path: 'reports/all'
        }
      }
    },
    'App Settings': {
      element: element(by.css('#sidebar-settings')),
      'General Settings': {
        element: element(by.css('#sidebar-settings-general')),
        path: 'settings/general'
      }
    },
    'App Help': {
      element: element(by.css('#sidebar-help')),
      'General Help': {
        element: element(by.css('#sidebar-help-general')),
        path: 'help/general'
      }
    }
  }

  itemLabel = element(by.cssContainingText('a > span', 'Units'))
  minifyBtn = element(by.css('.sidebar-minify-btn'));

  getItem(item) {
    return helpers.getItem(item, this.items);
  }
}
