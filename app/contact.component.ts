import { Component } from '@angular/core';
import { Hero }    from './hero';
@Component({
  moduleId: module.id,
  selector: 'join',
  templateUrl: '../app/contact.component.html'
})
export class ContactComponent { 
  contact = new Hero(0, '','');
  submitted = false;
  onSubmit() { this.submitted = true; }

    onNewcontact(){
     this.contact = new Hero(0, this.contact.name, this.contact.bio);
    }
    ngOnInit() {
    this.contact = {id:0 ,name:'',bio:''}
  }
}
