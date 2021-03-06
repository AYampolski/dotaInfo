import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators'

import { TeamsResolverService } from '../../../../services/teams-resolver.service';
import { TeamsAcitonsService } from '../../../../services/teams-acitons.service';
import { TeamResponse, TeamPlayer } from 'src/app/models/team.model';

@Component({
  selector: 'app-team-dashboard',
  templateUrl: './team-dashboard.component.html',
  styleUrls: ['./team-dashboard.component.scss']
})
export class TeamDashboardComponent implements OnInit {

  teamList;
  playerList;
  sortedItems;
  teamNumberLast = 20;
  teamNumberFirst = 0;
  currentPlayers;
  formerPlayers ;

  constructor(
    private actr: ActivatedRoute,
    // private teamAction: TeamsAcitonsService
    ) {
      this.actr.data.
        pipe(
          map( (resolver ) => resolver.teams.slice(this.teamNumberFirst, this.teamNumberLast))
        )
        .subscribe((teams: TeamResponse[]) => {
           this.teamList = teams;
          });


  }

  ngOnInit() {

  }

}
