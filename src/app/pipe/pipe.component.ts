import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {
  employees:any[] | undefined;

  constructor() {
    this.employees = [
      {'name': 'raj', 'city': 'Hartford', 'salary': 4321, 'dateOfJoining': new Date() },
      {'name': 'kumar', 'city': 'Boston', 'salary': 7653.64, 'dateOfJoining': new Date() },
      {'name': 'mallik', 'city': 'new York', 'salary': 532.7532, 'dateOfJoining': new Date() }
    ];
  }
}
