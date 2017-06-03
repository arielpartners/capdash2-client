import {MockComponent} from 'ng2-mock-component';

export const MockIconComponent = MockComponent({
  selector: 'cd-icon',
  inputs: ['className', 'activeUrl', 'activeClass'],
  outputs: ['className', 'activeUrl', 'activeClass'],
});
