import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgModule} from '@angular/core';
import {NgReduxModule} from '@angular-redux/store';
import {NgReduxRouterModule} from '@angular-redux/router';
import {RouterModule} from '@angular/router';

// This app's ngModules
import {ItemModule} from './core/ajax/item/item.module';
import {StoreModule} from './store/store.module';
import {OfflineUnitsModule} from './containers/offline-units/offline-units.module';

import {AppComponent} from './app.component';
import {appRoutes} from './app.routes';
import {ForecastsModule} from './containers/forecasts/forecasts.module';
import {HeaderComponent} from './components/header/header.component';
import {HomeComponent} from './containers/home/home.component';
import {HotelsModule} from './containers/hotels/hotels.module';
import {IconModule} from './components/icon/icon.module';
import {ListModule} from './components/list/list.module';
import {LoginComponent} from './containers/login/login.component';
import {MenuModule} from './components/menu/menu.module';
import {PageNotFoundComponent} from './core/page-not-found/page-not-found.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {SafeUrlPipe} from './core/utils/safe-url.pipe';
import {TextInverseDirective} from './directives/text/text.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    PageNotFoundComponent,
    SafeUrlPipe,
    SidebarComponent,
    TextInverseDirective,
  ],
  imports: [
    BrowserModule,
    ForecastsModule,
    FormsModule,
    HotelsModule,
    HttpModule,
    IconModule,
    ItemModule,
    ListModule,
    MenuModule,
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
