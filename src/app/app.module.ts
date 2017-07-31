import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {ClienteService} from './cliente/cliente.service';
import {LoginService} from './login/login.service';

import {AppComponent} from './app.component';
import {MenuDrawerComponent} from './menu-drawer/menu-drawer.component';
import {LoginComponent} from './login/login.component';
import {ClienteComponent} from './cliente/cliente/cliente.component';
import {ClienteListComponent} from './cliente/cliente-list/cliente-list.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AppRoutingModule} from './app-routing.module';
import {GenericComponent} from './generic/generic/generic.component';
import {LateChargesComponent} from './dashboard/late-charges/late-charges.component';
import {AuthInterceptor} from './interceptors/auth-interceptor';
import {ErrorInterceptor} from './interceptors/error-interceptor';
import {ApiInterceptor} from './interceptors/api-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    MenuDrawerComponent,
    LoginComponent,
    ClienteComponent,
    ClienteListComponent,
    DashboardComponent,
    GenericComponent,
    LateChargesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ClienteService, LoginService,
    {provide: LOCALE_ID, useValue: 'pt-BR'},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    }, {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }, {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
