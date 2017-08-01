import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {ConsumerComponent} from './consumer/consumer/consumer.component';
import {ConsumerListComponent} from './consumer/consumer-list/consumer-list.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ConsumerDashboardComponent} from "./consumer/consumer-dashboard/consumer-dashboard.component";
import {NotFoundComponent} from "./not-found/not-found.component";

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'consumers', component: ConsumerListComponent},
  {path: 'consumers/:id', component: ConsumerComponent},
  {path: 'consumers/:id/dashboard', component: ConsumerDashboardComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
