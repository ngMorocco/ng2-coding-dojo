import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule}   from '@angular/router';
import {FormsModule}   from '@angular/forms';
import {AppComponent}   from './app.component';
import {HeroesComponent}   from './components/heroes/heroes.component';
import {DetailComponent} from './components/detail/detail.component';
import {HomeComponent} from './components/home/home.component';
import {ContactComponent} from './components/contact/contact.component';
import {HeroService} from './services/hero.service';

@NgModule({
    imports: [BrowserModule,
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
    declarations: [AppComponent, DetailComponent, HeroesComponent, HomeComponent, ContactComponent],
    providers: [
        HeroService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
