import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';

import { PlayersRoutingModule } from './players-routing.module';
import { PlayerCardComponent } from './components/player-card/player-card.component';
import { MatchesExpansionComponent } from './components/matches-expansion/matches-expansion.component';
import { PlayerDashboardComponent } from './components/player-dashboard/player-dashboard.component';


@NgModule({
  declarations: [PlayerCardComponent, MatchesExpansionComponent, PlayerDashboardComponent],
  imports: [
    CommonModule,
    PlayersRoutingModule,
    MatExpansionModule
  ]
})
export class PlayersModule { }
