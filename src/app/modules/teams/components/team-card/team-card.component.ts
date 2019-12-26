import { Component, OnInit, Input } from '@angular/core';
import { TeamsAcitonsService } from '../../../../services/teams-acitons.service';


@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.scss']
})
export class TeamCardComponent implements OnInit {

  @Input() team;

  constructor(public teamService: TeamsAcitonsService) { }

  ngOnInit() {
  }

  onSelectTeam(e){
    console.log(e);
    this.teamService.setSelectedTeam(e).subscribe(val => {
      this.teamService.updateTeamPlayers(val);
    });
  }

}
