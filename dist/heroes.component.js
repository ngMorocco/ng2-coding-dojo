"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var mock_1 = require('./mock');
var hero_service_ts_1 = require('./services/hero.service.ts');
var HeroesComponent = (function () {
    function HeroesComponent(heroService) {
        this.heroService = heroService;
        this.heroes = mock_1.HEROES;
    }
    HeroesComponent.prototype.getHeroes = function () {
        this.heroService.getHeroes();
    };
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    HeroesComponent = __decorate([
        core_1.Component({
            selector: 'heroes',
            styles: ["\n  .selected {\n    background-color: #CFD8DC !important;\n  \n  }\n .heroes li {\n    cursor: pointer;}\n"],
            template: "\n<div class=\"container\">\n  <h2>Heroes List</h2>\n<ul class=\"heroes\">\n  <li *ngFor=\"let hero of heroes\"  (click)=\"onSelect(hero)\" [class.selected]=\"hero === selectedHero\">\n   <span class=\"badge\">{{hero.id}}</span>  {{hero.name}}\n  </li>\n</ul> <div>\n <detail [hero]=\"selectedHero\"></detail>\n  "
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof hero_service_ts_1.HeroService !== 'undefined' && hero_service_ts_1.HeroService) === 'function' && _a) || Object])
    ], HeroesComponent);
    return HeroesComponent;
    var _a;
}());
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes.component.js.map