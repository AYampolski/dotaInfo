import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';


import { TeamsRoutingModule } from './teams-routing.module';
import { PlayerCardComponent } from './components/player-card/player-card.component';

import { TeamDashboardComponent } from './components/team-dashboard/team-dashboard.component';
import { TeamCardComponent } from './components/team-card/team-card.component';
import { TeamStructureComponent } from './components/team-structure/team-structure.component';


@NgModule({
  declarations: [PlayerCardComponent, TeamCardComponent, TeamDashboardComponent, TeamStructureComponent],
  imports: [
    CommonModule,
    TeamsRoutingModule,
    MatCardModule,
    MatGridListModule
  ]
})
export class TeamsModule { }
