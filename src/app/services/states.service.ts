import { Injectable } from '@angular/core';
import { HeroResponse } from '../models/hero.mode';

@Injectable({
  providedIn: 'root'
})
export class StatesService {
  public heroesList: HeroResponse[];
  constructor() { }

  set setHeroes(heroesList) {
    this.heroesList = heroesList;
  }

  getHeroById(heroId) {
    return this.heroesList.find(item => {
      return item.id === heroId;
    });
  }
}
