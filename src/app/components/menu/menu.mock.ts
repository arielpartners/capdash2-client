import {MockComponent} from 'ng2-mock-component';

export const MockMenuComponent = MockComponent({
  selector: 'cd-menu',
  inputs: ['triggerBy', 'className'],
  outputs: ['triggerBy', 'className'],
});

export const MockMenuHeaderComponent = MockComponent({
  selector: 'cd-menu-header',
  inputs: ['icon', 'text'],
  outputs: ['icon', 'text'],
});

export const MockMenuButtonComponent = MockComponent({
  selector: 'cd-menu-button',
  inputs: ['id', 'name', 'className'],
  outputs: ['id', 'name', 'className'],
});

export const MockMenuItemComponent = MockComponent({
  selector: 'cd-menu-item',
  inputs: ['link', 'className'],
  outputs: ['link', 'className'],
});
