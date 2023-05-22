import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  @Input() myCompany:string | undefined;
  @Output() msg:EventEmitter<string>

  constructor() {
    this.msg = new EventEmitter<string>();
  }

  SendData() {
    this.msg.emit("some message from details component");
  }
}
