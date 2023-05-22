import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
  name:string;
  company:string;
  site:string;

  constructor() {
    this.name = "mohan";
    this.company = "DNT";
    this.site = "http://www.google.com";
  }

  ngOnInit(): void {
    
  }

  Greet() : void {
    alert(`hai ${this.name}`);
  }
}
