import { Component, Input } from '@angular/core';
import { PlayerResponse } from 'src/app/models/player.model';


@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent {
  @Input() player: PlayerResponse;






}



