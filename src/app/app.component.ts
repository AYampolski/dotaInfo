import { Component, OnInit } from '@angular/core';
import { HttpService } from './services/http.service';
import { SwUpdate } from '@angular/service-worker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dotaInfo';
  heroesList: any;
  constructor(private http: HttpService, updates: SwUpdate) {
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
    this.http.getAllHeroes().subscribe(data => {
      console.log(data);
      this.heroesList = data;
    })
  }
}
