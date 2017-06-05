import { browser, element, by } from 'protractor';

export class SidebarPage {
  items = {
    'Edit Demand & Projections': {
      element: element(by.css('#edit-demand')),
      path: 'edit-demand/edit'
    },
    'Intake/Vacancy Control': {
      element: element(by.css('#intake')),
      path: 'ivc'
    }
  }

  getItem(item) {
    return this.items[item];
  }
}
