import { browser, element, by } from 'protractor';
import { SidebarPage } from '../../../../page-objects/sidebar.po';
import { Capdash2Page } from '../../../../page-objects/app.po';

import { defineSupportCode } from 'cucumber';

import { expect } from 'chai';

defineSupportCode(({Given, When, Then}) => {
  const sidebar: SidebarPage = new SidebarPage();
  const app: Capdash2Page = new Capdash2Page();

})
