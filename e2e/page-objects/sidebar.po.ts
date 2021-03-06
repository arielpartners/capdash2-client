import { browser, element, by } from 'protractor';
import { E2EHelpers } from '../support/e2eHelpers';

const helpers = new E2EHelpers();

export class SidebarPage {
  items = {
    'Dashboard': {
      element: element(by.cssContainingText('.has-sub', 'Dashboard')),
      children: {
        'Main Dashboard': {
          element: element(by.xpath('//dhs-list[@class="sub-menu"]//dhs-list-item//span[text()[contains(., "Dashboard")]]/../..')),
          path: 'dashboard'
        }
      }
    },
    'Units': {
      element: element(by.cssContainingText('.has-sub', 'Units')),
      children: {
        'Offline Units': {
          element: element(by.xpath('//dhs-list[@class="sub-menu"]//a/span[text()[contains(., "Offline Units")]]/../..')),
          path: 'units/offline-units'
        },
        'HERO': {
          element: element(by.xpath('//dhs-list[@class="sub-menu"]//a/span[text()[contains(., "HERO")]]/../..')),
          path: 'units/hero'
        },
        'LTR': {
          element: element(by.xpath('//dhs-list[@class="sub-menu"]//a/span[text()[contains(., "LTR")]]/../..')),
          path: 'units/ltr'
        },
        'Demand & Projections': {
          element: element(by.xpath('//dhs-list[@class="sub-menu"]//a/span[text()[contains(., "Demand & Projections")]]/../..')),
          path: 'units/demand'
        }
      }
    },
    'Edit Demand & Projections': {
      element: element(by.cssContainingText('dhs-list-item', 'Edit Demand & Projections')),
      path: 'edit-demand/edit'
    },
    'Intake/Vacancy Control': {
      element: element(by.cssContainingText('dhs-list-item', 'Intake/Vacancy Control')),
      path: 'ivc'
    },
    'Reports': {
      element: element(by.xpath('//div[@class="sidebar-item"]/dhs-list-item/a/span[text()[contains(., "Reports")]]/../..')),
      children: {
        'General Reports': {
          element: element(by.xpath('//dhs-list[@class="sub-menu"]//a/span[text()[contains(., "General Reports")]]/../..')),
          path: 'reports/general'
        },
        'Other Reports': {
          element: element(by.xpath('//a[text()[contains(., "Other Reports")]]/..')),
          children: {
            'Report All': {
              element: element(by.xpath('//dhs-list-item/dhs-list/dhs-list-item/a/span[text()[contains(., "Report All")]]/../..')),
              path: 'reports/all'
            }
          }
        }
      }
    },
    'App Settings': {
      element: element(by.cssContainingText('.has-sub', 'App Settings')),
      children: {
        'General Settings': {
          element: element(by.xpath('//dhs-list[@class="sub-menu"]//a/span[text()[contains(., "General Settings")]]/../..')),
          path: 'settings/general'
        }
      }
    },
    'App Help': {
      element: element(by.cssContainingText('.has-sub', 'App Help')),
      children: {
        'General Help': {
          element: element(by.xpath('//dhs-list[@class="sub-menu"]//a/span[text()[contains(., "General Help")]]/../..')),
          path: 'help/general'
        }
      }
    }
  }

  itemLabel = element(by.cssContainingText('dhs-list-item.has-sub > a > span', 'Units'));
  minifyBtn = element(by.css('.sidebar-minify-btn'));

  getItem(item) {
    return helpers.getItem(item, this.items);
  }
}
