import { Component, OnInit } from '@angular/core';
import { HttpService } from './services/http.service';
import { SwUpdate } from '@angular/service-worker';
import { StatesService } from './services/states.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dotaInfo';
  heroesList: any;
  constructor(private http: HttpService, public updates: SwUpdate, private states: StatesService) {
    updates.available.subscribe(event => {
      console.log('current version is', event.current);
      console.log('available version is', event.available);
    });
    updates.activated.subscribe(event => {
      console.log('old version was', event.previous);
      console.log('new version is', event.current);
    });
  }

  ngOnInit(){
    if (this.updates && this.updates.isEnabled) {
      this.updates.available.subscribe(event => {
        console.log('current version is', event.current);
        console.log('available version is', event.available);
        if (confirm('New version of admin available. Load New Version?')) {
          this.updates.activateUpdate().then(() => window.location.reload());
        }
      });
    }
    this.http.getAllHeroes().subscribe(data => {
      console.log(data);
      this.states.setHeroes = data;
      this.heroesList = data;
    })
  }
}
