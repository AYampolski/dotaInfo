import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, zip } from 'rxjs';
import { PlayerActionsService } from './player-actions.service';


@Injectable({
  providedIn: 'root'
})
export class PlayerResolverService {


  constructor(
    private playerApi: PlayerActionsService,
  ) {}
  resolve(
    route: ActivatedRouteSnapshot,
    rstate: RouterStateSnapshot
  ): Observable<any> {
    const playerId = route.params['id'];
    return zip(
      this.playerApi.getPlayer(playerId),
      this.playerApi.getPlayersRecentGames(playerId),
      this.playerApi.getPlayerWLByPatch(playerId, this.playerApi.currentPatch)
    );
  }
}
