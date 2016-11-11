import {Component, Input} from '@angular/core';
import {Hero} from '../../models/hero';

@Component({
    selector: 'detail',
    templateUrl: './app/components/detail/detail.component.html'
})
export class DetailComponent {
    @Input()
    hero:Hero;
}
