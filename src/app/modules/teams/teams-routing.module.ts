import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamDashboardComponent } from './components/team-dashboard/team-dashboard.component';


const routes: Routes = [
  {
    path: '', component: TeamDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsRoutingModule { }
