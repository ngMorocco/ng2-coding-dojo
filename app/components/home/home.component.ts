import { Component, OnInit } from '@angular/core';
import {HeroService} from '../../services/hero.service';
import {Hero} from '../../models/hero';

@Component({
  selector: 'dashboard',
  styleUrls: ['./app/components/home/home.component.css'],
  templateUrl: './app/components/home/home.component.html'
})
export class HomeComponent implements OnInit {

  heroes:Hero[] = [];

  constructor(public heroService:HeroService) {}

  ngOnInit() {
    this.getTopHeroes(3);
  }

  getTopHeroes(top: number) {
    this.heroes = this.heroService.getTopHeroes(top);
  }

}
