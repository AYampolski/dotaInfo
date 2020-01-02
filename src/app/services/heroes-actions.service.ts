import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class HeroesActionsService {

  constructor(private http: HttpService) { }

  getAllHeroes() {
    return this.http.getAllHeroes();
  }
}
