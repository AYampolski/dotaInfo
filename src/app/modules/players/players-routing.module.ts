import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayerCardComponent } from './components/player-card/player-card.component';
import { PlayerDashboardComponent } from './components/player-dashboard/player-dashboard.component';
import { PlayerResolverService } from 'src/app/services/player-resolver.service';


const routes: Routes = [
  {
    path: ':id', component: PlayerDashboardComponent,
    resolve: {
      player: PlayerResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayersRoutingModule { }
