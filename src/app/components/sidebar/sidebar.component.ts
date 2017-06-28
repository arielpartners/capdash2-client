import { AfterViewInit, Component, Input, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { NgRedux } from '@angular-redux/store';

import { IAppState } from '../../store/root.types';
import { ITEM_TYPES } from 'dhs-common-module/src/lib/ajax/item/item.types';
import { ItemActions } from 'dhs-common-module/src/lib/ajax/item/item.actions';

import {
  DashboardsMenu,
  UnitsMenu,
  DemandMenu,
  IntakeMenu,
  ReportsMenu,
  SettingsMenu,
  HelpMenu
} from './sidebar.model';

@Component({
  selector: 'cd-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.less'],
  providers: [
    ItemActions
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent implements AfterViewInit {
  @Input() version:  Observable<string>;
  @Input() loading: Observable<boolean>;
  @Input() error: Observable<any>;
  agencyTitle = 'DSS';
  appShTitle = 'CapDash';
  appTitle = 'Shelter Capacity & Planning';

  expandedMenu = 'dashboard';
  sidebarMinimized = false;
  sidebarMenu: any;
  sidebarItems: any;

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private actions: ItemActions
  ) {
    this.sidebarMenu = {
      dashboards: DashboardsMenu,
      units: UnitsMenu,
      demand: DemandMenu,
      intake: IntakeMenu,
      reports: ReportsMenu,
      settings: SettingsMenu,
      help: HelpMenu
    }

    this.sidebarItems = [
      DashboardsMenu,
      UnitsMenu,
      DemandMenu,
      IntakeMenu,
      ReportsMenu,
      SettingsMenu,
      HelpMenu
    ]
  }

  ngAfterViewInit() {
    this.ngRedux.dispatch(this.actions.loadItem(ITEM_TYPES.INFO));
  }

}
