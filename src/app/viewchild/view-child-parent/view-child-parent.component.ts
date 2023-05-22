import { Component, ViewChild } from '@angular/core';
import { ViewChildComponent } from '../view-child/view-child.component';

@Component({
  selector: 'app-view-child-parent',
  templateUrl: './view-child-parent.component.html',
  styleUrls: ['./view-child-parent.component.css']
})
export class ViewChildParentComponent {
  @ViewChild(ViewChildComponent) child: ViewChildComponent;
 // private child = {} as ViewchildComponent;

  constructor() {
   this.child = new ViewChildComponent();
  }

  ngAfterViewInit(): void {
    alert(this.child.SayHello());
  }
}
