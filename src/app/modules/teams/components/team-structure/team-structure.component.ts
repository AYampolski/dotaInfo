import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { TeamPlayer } from 'src/app/models/team.model';
import { TeamsAcitonsService } from '../../../../services/teams-acitons.service';

@Component({
  selector: 'app-team-structure',
  templateUrl: './team-structure.component.html',
  styleUrls: ['./team-structure.component.scss']
})
export class TeamStructureComponent implements OnInit, AfterViewInit{

  public currentPlayers: TeamPlayer[];
  public formerPlayers: TeamPlayer[];
  public numberPlayers: number;

  constructor(private teamAction: TeamsAcitonsService) {
    this.teamAction.teamPlayers.subscribe( (players) => {
      this.currentPlayers = players.currentPlayers;
      this.formerPlayers = players.formerPlayers;
    });
  }

  get selectedTeam() {
    return this.teamAction.selectedTeam.name;
  }

  get totalPlayers() {
    return this.currentPlayers.length + this.formerPlayers.length;
  }



  ngOnInit() {

  }

  ngAfterViewInit() {

  }

}
