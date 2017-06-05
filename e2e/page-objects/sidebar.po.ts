import { browser, element, by } from 'protractor';

export class SidebarPage {
  items = {
    'Edit Demand & Projections': {
      element: element(by.css('#edit-demand')),
      path: 'edit-demand/edit'
    }
  }
}
