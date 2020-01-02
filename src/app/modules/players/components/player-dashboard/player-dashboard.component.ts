import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StatesService } from 'src/app/services/states.service';
import { PlayerResponse, PlayerWL, PlayerMatches } from 'src/app/models/player.model';
import { PlayerActionsService } from '../../../../services/player-actions.service';

@Component({
  selector: 'app-player-dashboard',
  templateUrl: './player-dashboard.component.html',
  styleUrls: ['./player-dashboard.component.scss']
})
export class PlayerDashboardComponent implements OnInit {

  public player: PlayerResponse;
  public matches: PlayerMatches[];
  public newMatches: PlayerMatches[];
  public wl: PlayerWL;

  constructor(private actr: ActivatedRoute, private states: StatesService, private playerActions: PlayerActionsService) {
    this.actr.data
    .subscribe(({player}) => {
       this.player = player[playerData.CommonInfa];
       this.matches = player[playerData.Matches];
       this.wl = player[playerData.WL];
       console.log(this.wl);
       this.newMatches = this.matches.map(match => {
         const newMatch = match;

         newMatch.heroInfo = states.getHeroById(match.hero_id);
         return match;
       });
       console.log(this.newMatches);

      });
  }

  get currentPatch(): number {
    return this.playerActions.currentPatch;
  }

  ngOnInit() {
  }

}


export enum playerData {
  CommonInfa,
  Matches,
  WL
}
