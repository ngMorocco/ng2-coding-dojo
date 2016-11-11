import { Component, OnInit  } from '@angular/core';
import { Hero } from './../../models/hero';
import { DetailComponent } from '../detail/detail.component.ts';
import { HEROES } from './../../mock';
import { HeroService } from './../../services/hero.service.ts';

@Component({
  selector: 'heroes',
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
  
  }
 .heroes li {
    cursor: pointer;}
`],

  template: `
<div class="container">
  <h2>Heroes List</h2>
<ul class="heroes">
  <li *ngFor="let hero of heroes"  (click)="onSelect(hero)" [class.selected]="hero === selectedHero">
   <span class="badge">{{hero.id}}</span>  {{hero.name}}
  </li>
</ul> <div>
 <detail [hero]="selectedHero"></detail>
  `
})
export class HeroesComponent implements OnInit {
  
  constructor(public heroService: HeroService) { }

  heroes = HEROES ;
  selectedHero: Hero;


    getHeroes() {
    this.heroService.getHeroes();
  }
  ngOnInit() {
    this.getHeroes();
  }


  onSelect(hero: Hero) {
  this.selectedHero = hero;
}
 }
