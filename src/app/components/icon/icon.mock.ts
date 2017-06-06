import {MockComponent} from 'ng2-mock-component';

export const MockIconComponent = MockComponent({
  selector: 'cd-icon',
  inputs: ['font', 'size', 'icon', 'fixed', 'color'],
  outputs: ['font', 'size', 'icon', 'fixed', 'color'],
});
