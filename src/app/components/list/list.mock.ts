import {MockComponent} from 'ng2-mock-component';

export const MockListComponent = MockComponent({
  selector: 'cd-list',
  inputs: ['className'],
  outputs: ['className'],
});

export const MockBadgeComponent = MockComponent({
  selector: 'cd-badge',
  inputs: ['status', 'value', 'right'],
  outputs: ['status', 'value', 'right'],
});

export const MockListItemComponent = MockComponent({
  selector: 'cd-list-item',
  inputs: ['link', 'className'],
  outputs: ['link', 'className'],
});
