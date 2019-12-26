import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-team-structure',
  templateUrl: './team-structure.component.html',
  styleUrls: ['./team-structure.component.scss']
})
export class TeamStructureComponent implements OnInit {

  @Input() player;
  constructor() { }

  ngOnInit() {
  }

}
