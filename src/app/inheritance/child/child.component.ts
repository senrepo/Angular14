import { Component } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent extends ParentComponent{
  constructor() {
    super(); //must to call parent constructor
    console.log('child:constructor');
  }

  override ngOnInit(): void {
    console.log('child:ngOnInit');
  }
}
