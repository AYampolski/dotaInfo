import { Injectable } from '@angular/core';

import { HttpService } from './http.service';
import { take, filter, map } from 'rxjs/operators';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { TeamPlayers } from '../models/team.model';

@Injectable({
  providedIn: 'root'
})
export class TeamsAcitonsService {
  selectedTeam;
  teamPlayers = new Subject();

  constructor(private http: HttpService) { }

  setSelectedTeam(value){
    console.log('service');
    this.selectedTeam = value;
    return this.getPlayers(value.team_id).pipe(take(1));
  }

  getPlayers(teamId: number) {
    return this.http.getTeamPlayers(teamId).pipe(map (player => {
      // console.log('new' , player.name);
      const players = player.filter(item => {
        return item.name !== null;
      })
      return players;
    }));
  }

  setTeamPlayers() {
    return this.teamPlayers.asObservable();
  }

  updateTeamPlayers(data) {
    this.teamPlayers.next(data);
  }

  getTeams() {
    return this.http.getAllTeams();
  }

  sortPlayersByActivity(players) {
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
    }
  }
}
