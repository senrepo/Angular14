import { Component } from '@angular/core';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent {
  company:string | undefined;
  msgFromDetailComponent:string|undefined;

  constructor() {
    this.company = "DNT";
  }

  GetData(val:string) {
    this.msgFromDetailComponent = val;
  }
}
