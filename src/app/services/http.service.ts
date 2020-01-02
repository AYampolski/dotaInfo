import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TeamResponse, TeamPlayer } from '../models/team.model';
import { PlayerMatches, PlayerWL } from '../models/player.model';
import { HeroResponse } from '../models/hero.mode';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private heroUrl = 'https://api.opendota.com/api/heroes';
  private teamsUrl = 'https://api.opendota.com/api/teams';
  private liveUrl = 'https://api.opendota.com/api/live';
  private playerUrl = 'https://api.opendota.com/api/players';

  constructor(
    private http: HttpClient
  ) { }

  getWLofPlayerById(playerId: number, patch: number = 42):  Observable<PlayerWL> {
    return this.http.get<PlayerWL>(`${this.playerUrl}/${playerId}/wl?patch=${patch}`);
  }

  getAllHeroes(): Observable<HeroResponse[]> {
    return this.http.get<HeroResponse[]>(this.heroUrl);
  }

  getAllTeams(): Observable<TeamResponse[]> {
    return this.http.get<TeamResponse[]>(this.teamsUrl);
  }

  getTeamPlayer(teamId: number): Observable<Array<TeamPlayer>> {
    return this.http.get<Array<TeamPlayer>>(`${this.teamsUrl}/${teamId}/players`);
  }

  getPlayerById(playerId: number): Observable<TeamPlayer> {
    return this.http.get<TeamPlayer>(`${this.playerUrl}/${playerId}`);
  }

  getPlayerRecentGames(playerId: number): Observable<PlayerMatches[]> {
    return this.http.get<PlayerMatches[]>(`${this.playerUrl}/${playerId}/recentMatches`);
  }

  getLiveGames() {
    return this.http.get(this.liveUrl);
  }
}
