import {Component, OnInit} from '@angular/core';
import {Hero} from './../../models/hero';
import {HEROES} from './../../mock';
import {HeroService} from '../../services/hero.service';

@Component({
    selector: 'heroes',
    styleUrls: ['./app/components/heroes/heroes.component.css'],
    templateUrl: './app/components/heroes/heroes.component.html'
})
export class HeroesComponent implements OnInit {

    constructor(public heroService:HeroService) {
    }

    heroes = HEROES;
    selectedHero:Hero;


    getHeroes() {
        this.heroService.getHeroes();
    }

    ngOnInit() {
        this.getHeroes();
    }
  
    onSelect(hero:Hero) {
        this.selectedHero = hero;
    }
}
