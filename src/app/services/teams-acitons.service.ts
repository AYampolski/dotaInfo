import { Injectable } from '@angular/core';

import { HttpService } from './http.service';
import { take, map } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { TeamPlayer, TeamResponse, TeamsSorted } from '../models/team.model';
import { PlayerMatches } from '../models/player.model';

@Injectable({
  providedIn: 'root'
})
export class TeamsAcitonsService {
  public selectedTeam: TeamResponse;
  public teamPlayers = new Subject<TeamsSorted>();

  constructor(private http: HttpService) { }

  getPlayers(teamId: number): Observable<TeamPlayer[]> {
    return this.http.getTeamPlayer(teamId).pipe(
      map ( (players: TeamPlayer[] ) => {
            return players.filter( item => {
              return item.name;
            });
        })
      );
  }





  getTeams(): Observable<TeamResponse[]>  {
    return this.http.getAllTeams();
  }

  setSelectedTeam(players: TeamResponse): Observable<TeamPlayer[]> {
    this.selectedTeam = players;
    return this.getPlayers(players.team_id).pipe(take(1));
  }

  updateTeamPlayer(players): void {
    const sortedPlayers = this.sortPlayersByActivity(players);
    this.teamPlayers.next(sortedPlayers);
  }


  sortPlayersByActivity(players: TeamPlayer[]) {
    const currentPlayers = [];
    const formerPlayers = players.filter(player => {
      if (player.is_current_team_member) {
        currentPlayers.push(player);
      }
      return !player.is_current_team_member;
    });
    return {
      currentPlayers,
      formerPlayers
    };
  }
}
