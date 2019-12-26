import { Component, OnInit, Input } from '@angular/core';
import { TeamsAcitonsService } from '../../../../services/teams-acitons.service';
import { TeamResponse } from 'src/app/models/team.model';


@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.scss']
})
export class TeamCardComponent implements OnInit {

  @Input() team: TeamResponse;

  constructor(public teamService: TeamsAcitonsService) { }

  ngOnInit() {
  }

  onSelectTeam(selectedTeam: TeamResponse) {
    this.teamService.setSelectedTeam(selectedTeam).subscribe(val => {
      this.teamService.updateTeamPlayer(val);
    });
  }

}
