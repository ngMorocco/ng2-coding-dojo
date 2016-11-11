import { Component, Input } from '@angular/core';
import { Hero } from './hero';
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <a routerLink="/home">Home</a>
    <a routerLink="/heroes">Our Heroes</a>
    <a routerLink="/contact">contact Us</a>
    <router-outlet></router-outlet>
  `

})
export class AppComponent {
   title = "Heroes don't always wear caps";
}
