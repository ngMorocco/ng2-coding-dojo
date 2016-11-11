import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { HeroesComponent }   from './heroes.component';
import { DetailComponent } from './detail.component';
import { HomeComponent } from './home.component';
import { ContactComponent } from './contact.component';
import { HeroService }         from './hero.service';
@NgModule({
  imports:      [ BrowserModule,
  FormsModule,
  RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroesComponent
      },
      {
         path: 'home',
        component: HomeComponent
      },
      {
         path: 'contact',
        component: ContactComponent
      },
      {
        path: '',
       redirectTo: '/home',
      pathMatch: 'full'
      }
    ])
  ],
  declarations: [ AppComponent,DetailComponent,HeroesComponent,HomeComponent,ContactComponent ],
    providers: [
    HeroService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
