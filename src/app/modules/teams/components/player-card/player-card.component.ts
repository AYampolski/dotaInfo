import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent implements OnInit {

  @Input() player;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  handleClick(){
    console.log('!@#!@#!@#!@');
    console.log(this.player.account_id);

    this.router.navigate(['/player', this.player.account_id]);

  }
}
