import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiveDashboardComponent } from './components/live-dashboard/live-dashboard.component';

const routes: Routes = [
  {
    path: '', component: LiveDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LiveRoutingModule { }
