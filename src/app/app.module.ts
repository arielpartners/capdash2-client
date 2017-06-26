import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgModule} from '@angular/core';
import {NgReduxModule} from '@angular-redux/store';
import {NgReduxRouterModule} from '@angular-redux/router';
import {RouterModule} from '@angular/router';
// This app's ngModules
import {StoreModule} from './store/store.module';
import {OfflineUnitsModule} from './containers/offline-units/offline-units.module';
import {DHSModule} from 'dhs-common-module/src/lib/module';

import {AppComponent} from './app.component';
import {appRoutes} from './app.routes';
import {ForecastsModule} from './containers/forecasts/forecasts.module';
import {HomeComponent} from './containers/home/home.component';
import {HotelsModule} from './containers/hotels/hotels.module';
import {LoginComponent} from './containers/login/login.component';
import {PageNotFoundComponent} from './containers/page-not-found/page-not-found.component';
import {HeaderComponent} from './components/header/header.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    PageNotFoundComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    ForecastsModule,
    FormsModule,
    HotelsModule,
    HttpModule,
    DHSModule.forRoot(),
    NgbModule.forRoot(),
    NgReduxModule,
    NgReduxRouterModule,
    OfflineUnitsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    StoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
