import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgModule} from '@angular/core';
import {NgReduxModule} from '@angular-redux/store';
import {NgReduxRouterModule} from '@angular-redux/router';
import {RouterModule} from '@angular/router';

// This app's ngModules
import { ItemModule } from './core/ajax/item/item.module';
import { StoreModule } from './store/store.module';
import { OfflineUnitsModule } from './containers/offline-units/offline-units.module';

import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MenuModule } from './components/menu/menu.module';
import { HomeComponent } from './containers/home/home.component';
import { HotelsModule } from './containers/hotels/hotels.module';
import { ForecastsModule } from './containers/forecasts/forecasts.module';
import { LoginComponent } from './containers/login/login.component';
import { ListModule } from './components/list/list.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PageNotFoundComponent,
    SidebarComponent,
    LoginComponent,
  ],
  imports: [
    ListModule,
    MenuModule,
    BrowserModule,
    ForecastsModule,
    FormsModule,
    HotelsModule,
    HttpModule,
    ItemModule,
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
