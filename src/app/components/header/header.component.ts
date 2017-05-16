import { Component, OnInit, Input } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../store/root.types';

@Component({
  selector: 'cd-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent implements OnInit {

  public selectedDropdown: String;
  public isToggled: Boolean;

  constructor( private ngRedux: NgRedux<IAppState> ) {}

  ngOnInit() {
    this.selectedDropdown = '';
    this.isToggled = false
  }

  logout() {
    localStorage.clear();
    this.toggleDropdown(undefined);
    this.ngRedux.dispatch({type: 'logged-out'});
  }

  toggleDropdown(e) {
    const elem = e ? e.target : undefined;
    if (elem) {
      if (this.isToggled) {
        if (this.selectedDropdown === elem.id) {
          this.isToggled = false;
          this.selectedDropdown = '';
        } else {
          this.selectedDropdown = elem.id;
        }
      } else {
        this.isToggled = true;
        this.selectedDropdown = elem.id;
      }
    } else {
      this.isToggled = false;
      this.selectedDropdown = '';
    }
  }
}
