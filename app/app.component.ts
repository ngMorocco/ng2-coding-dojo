import { Component, Input } from '@angular/core';
import { Hero } from './hero';
@Component({
  selector: 'my-app',
  template: `
  <nav class="navbar navbar-default navbar-fixed-top">
  <div class="container">
  <div class="navbar-header">
    <a class="navbar-brand" href="#">{{brand}}</a>
  </div>
 <ul class="nav navbar-nav navbar-right">
   <li><a routerLink="/home">Home</a></li>
   <li> <a routerLink="/heroes">Our Heroes</a></li>
   <li> <a routerLink="/contact">contact Us</a></li>
 
  </ul>
  </div>
  </nav>
    <router-outlet></router-outlet>
  `

})
export class AppComponent {
   brand = "Heroes don't always wear caps... Sometimes they code with Angular";
}
