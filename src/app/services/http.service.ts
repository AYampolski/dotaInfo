import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TeamResponse, TeamPlayers } from '../models/team.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private heroUrl = 'https://api.opendota.com/api/heroes';
  private teamsUrl = 'https://api.opendota.com/api/teams';
  private liveUrl = 'https://api.opendota.com/api/live';


  // https://api.opendota.com/api/teams/{team_id}/players
  constructor(
    private http: HttpClient
  ) { }

  getAllHeroes() {
    return this.http.get(this.heroUrl);
  }

  getAllTeams(): Observable<TeamResponse> {
    return this.http.get<TeamResponse>(this.teamsUrl);
  }

  getTeamPlayers(teamId: number): Observable<Array<TeamPlayers>>{
    return this.http.get<Array<TeamPlayers>>(`${this.teamsUrl}/${teamId}/players`);
  }

  getLiveGames() {
    return this.http.get(this.liveUrl);
  }
}
