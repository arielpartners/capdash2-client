import { Component, OnInit, Input, ChangeDetectionStrategy, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../store/root.types';
import { HeaderActions } from './header.actions'

@Component({
  selector: 'cd-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
  providers: [HeaderActions],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {

  @Input() isToggled: Observable<boolean>;
  @Input() selectedDropdown: Observable<string>;

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private actions: HeaderActions
  ) {}

  logout() {
    localStorage.clear();
    this.ngRedux.dispatch({type: 'logged-out'});
    this.ngRedux.dispatch(this.actions.closeToggle());
  }

  ngOnInit() {
    // Question: Do i need OnInit lifecycle?
  }

  toggleDropdown(e) {
    const elem = e ? e.target : undefined,
          header = JSON.parse(localStorage.getItem('reduxPersist:header'));

    const shouldOpen = elem
      ? !header
        ? true
        : !header.isToggled
          ? true
          : header.selectedDropdown !== elem.id
      : false

    // console.log('toggleDropdown', elem, header, shouldOpen);
    if (shouldOpen) {
      this.ngRedux.dispatch(this.actions.openToggle(elem.id));
    } else {
      this.ngRedux.dispatch(this.actions.closeToggle());
    }
  }
}
