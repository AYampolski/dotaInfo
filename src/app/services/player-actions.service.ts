import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { PlayerMatches } from '../models/player.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerActionsService {

  public currentPatch = 42;

  constructor(private http: HttpService) { }

  getPlayer(playerId: number) {
    console.log('playerId: ', playerId);
    return this.http.getPlayerById(playerId);
  }

  getPlayerWLByPatch(playerId: number, patch: number) {
    return this.http.getWLofPlayerById(playerId, patch);
  }

  getPlayersRecentGames(playerId: number): Observable<PlayerMatches[]> {
    return this.http.getPlayerRecentGames(playerId);
  }
}
