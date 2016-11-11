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
var hero_1 = require('./hero');
var ContactComponent = (function () {
    function ContactComponent() {
        this.contact = new hero_1.Hero(0, '', '');
        this.submitted = false;
    }
    ContactComponent.prototype.onSubmit = function () { this.submitted = true; };
    ContactComponent.prototype.onNewcontact = function () {
        this.contact = new hero_1.Hero(0, this.contact.name, this.contact.bio);
    };
    ContactComponent.prototype.ngOnInit = function () {
        this.contact = { id: 0, name: '', bio: '' };
    };
    ContactComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'join',
            templateUrl: '../app/contact.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=contact.component.js.map