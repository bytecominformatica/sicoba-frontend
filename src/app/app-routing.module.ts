import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {ConsumerComponent} from './consumer/consumer/consumer.component';
import {ConsumerListComponent} from './consumer/consumer-list/consumer-list.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'consumers', component: ConsumerListComponent},
  {path: 'consumers/:id', component: ConsumerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
