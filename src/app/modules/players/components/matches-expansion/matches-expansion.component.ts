import { Component, OnInit, Input } from '@angular/core';

import * as moment from 'moment';

@Component({
  selector: 'app-matches-expansion',
  templateUrl: './matches-expansion.component.html',
  styleUrls: ['./matches-expansion.component.scss']
})
export class MatchesExpansionComponent implements OnInit {
  @Input() match;
  constructor() { }

  ngOnInit() {
  }

  getTime(value) {
    return  moment.unix(value).format('LLLL');
  }

}
