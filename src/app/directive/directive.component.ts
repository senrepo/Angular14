import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
  num:number;
  colors: any[] | undefined;
  color:string | undefined

  constructor() {
    this.num = 2;
    this.colors = ['red', 'green','blue'];
    this.color = '';
  }
}
