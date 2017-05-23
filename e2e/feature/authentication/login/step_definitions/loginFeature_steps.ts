import { LoginPage } from '../../../../page-objects/loginPage';

import { defineSupportCode } from 'cucumber';

import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
chai.use(chaiAsPromised);
const expect = chai.expect;

defineSupportCode(({Given, When, Then}) => {
  let page: LoginPage = new LoginPage();

  Given('The user navigates to the CapDash2 Homepage', () => {
    page.navigateTo();
    return page.getTitle().then(title => {
      expect(title).to.eventually.equal("Shelter Capacity Dashboard");
    });
  });

})
