import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {ConsumerService} from './consumer/consumer.service';
import {AuthService} from './login/auth.service';

import {AppComponent} from './app.component';
import {MenuDrawerComponent} from './menu-drawer/menu-drawer.component';
import {LoginComponent} from './login/login.component';
import {ConsumerComponent} from './consumer/consumer/consumer.component';
import {ConsumerListComponent} from './consumer/consumer-list/consumer-list.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AppRoutingModule} from './app-routing.module';
import {LateChargesComponent} from './dashboard/late-charges/late-charges.component';
import {AuthInterceptor} from './interceptors/auth-interceptor';
import {ErrorInterceptor} from './interceptors/error-interceptor';
import {ApiInterceptor} from './interceptors/api-interceptor';
import {ChargeStatusPipe} from './charge/charge-status.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MenuDrawerComponent,
    LoginComponent,
    ConsumerComponent,
    ConsumerListComponent,
    DashboardComponent,
    LateChargesComponent,
    ChargeStatusPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ConsumerService, AuthService,
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
