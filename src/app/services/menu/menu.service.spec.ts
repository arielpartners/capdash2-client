import { TestBed, async, inject } from '@angular/core/testing';
import { NgReduxTestingModule, MockNgRedux } from '@angular-redux/store/testing';
import { MenuService } from './menu.service';
import { MenuActions } from './menu.actions';

describe('MenuService', () => {

  let service, actions;
  let spyDispatch;

  beforeEach(() => {
    spyDispatch = spyOn(MockNgRedux.mockInstance, 'dispatch').and.callThrough();
    TestBed.configureTestingModule({
      imports: [NgReduxTestingModule],
      providers: [
        MenuService,
        MenuActions,
        MockNgRedux,
      ]
    });
    MockNgRedux.reset();
  });

  beforeEach(async(inject(
    [MenuService, MenuActions],
    (menuService, menuActions) => {
      service = menuService;
      actions = menuActions;
    })
  ));

  it('should exist', () => {
    expect(service).toBeTruthy();
  });

  it('should have store', () => {
    expect(service.store).toBeTruthy();
  });

  describe('openToggle()', () => {

    it('should exist', () => {
      expect(service.openToggle).toBeTruthy();
      expect(typeof service.openToggle).toBe('function');
    });

    it('should have called dispatch with openToggle action', () => {
      service.openToggle();
      expect(spyDispatch).toHaveBeenCalledWith(actions.openToggle());
    });

  });

  describe('closeToggle()', () => {

    it('should exist', () => {
      expect(service.closeToggle).toBeTruthy();
      expect(typeof service.closeToggle).toBe('function');
    });

    it('should have called dispatch with closeToggle action', () => {
      service.closeToggle();
      expect(spyDispatch).toHaveBeenCalledWith(actions.closeToggle());
    });

  });

  describe('toggleDropdown()', () => {

    const testCases = [
      {
        case: 'should open toggle when $event exist and localStorage is empty',
        reduxState: null,
        eventTarget: { target: { id: 'dropdown-1' } },
        expectAction: 'openToggle'
      },
      {
        case: 'should open toggle when $event exist and not toggled',
        reduxState: {
          isToggled: false,
          selectedDropdown: ''
        },
        eventTarget: { target: { id: 'dropdown-1' } },
        expectAction: 'openToggle'
      },
      {
        case: 'should open toggle when $event.target.id and selectedDropdown does not match',
        reduxState: {
          isToggled: true,
          selectedDropdown: 'already-opened-dropdown'
        },
        eventTarget: { target: { id: 'dropdown-1' } },
        expectAction: 'openToggle'
      },
      {
        case: 'should close toggle when $event is undefined',
        reduxState: null,
        eventTarget: undefined,
        expectAction: 'closeToggle'
      },
      {
        case: 'should close toggle when $event.target.id and selectedDropdown match',
        reduxState: {
          isToggled: true,
          selectedDropdown: 'dropdown-1'
        },
        eventTarget: { target: { id: 'dropdown-1' } },
        expectAction: 'closeToggle'
      }
    ];

    beforeEach(() => {
      localStorage.clear();
    });

    it('should exist', () => {
      expect(service.toggleDropdown).toBeTruthy();
      expect(typeof service.toggleDropdown).toBe('function');
    });

    testCases.forEach(testCase => {
      it(testCase.case, () => {

        if (testCase.reduxState) {
          localStorage.setItem('reduxPersist:header', JSON.stringify(testCase.reduxState));
        }

        service.toggleDropdown(testCase.eventTarget);

        if (testCase.expectAction === 'openToggle') {
          expect(spyDispatch).toHaveBeenCalledWith(actions.openToggle(testCase.eventTarget.target.id));
        } else {
          expect(spyDispatch).toHaveBeenCalledWith(actions.closeToggle());
        }
      });
    });

  });
});



