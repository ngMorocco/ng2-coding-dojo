import {Injectable} from '@angular/core';
import {Hero} from './../models/hero';
import {HEROES} from './../mock';

@Injectable()
export class HeroService {
    getHeroes():Hero[] {
        return HEROES;
    }

    getTopHeroes(top: number):Hero[] {
        return HEROES.slice(0, top + 1);
    }
}
