import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators'

import { TeamsResolverService } from '../../../../services/teams-resolver.service';
import { TeamsAcitonsService } from '../../../../services/teams-acitons.service';

@Component({
  selector: 'app-team-dashboard',
  templateUrl: './team-dashboard.component.html',
  styleUrls: ['./team-dashboard.component.scss']
})
export class TeamDashboardComponent implements OnInit {
  teamList;
  playerList;
  constructor(private actr: ActivatedRoute, private teamAction: TeamsAcitonsService) {
    this.actr.data.pipe(map( (res ) => res.ss.slice(0,20)) ).subscribe(el => {
      console.log('111', el);
      this.teamList = el;
    });

    // this.teamAction.setTeamPlayers.asObservable();
    this.teamAction.setTeamPlayers().subscribe(mes => {
      console.log('updated', mes);
      this.playerList = mes;
      const sortedItems = this.teamAction.sortPlayersByActivity(mes);
    })
  }

  ngOnInit() {

  }

}
