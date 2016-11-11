import {Component, Input} from '@angular/core';
import {Hero} from '../../models/hero';

@Component({
    moduleId: module.id,
    selector: 'detail',
    templateUrl: '../app/detail.component.html'

})
export class DetailComponent {
    @Input()
    hero:Hero;
}
