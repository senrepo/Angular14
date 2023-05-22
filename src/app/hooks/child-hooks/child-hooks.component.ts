import { Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-hooks',
  templateUrl: './child-hooks.component.html',
  styleUrls: ['./child-hooks.component.css']
})
export class ChildHooksComponent implements OnInit, DoCheck, OnDestroy, OnChanges{
  @Input() myName: string | undefined;

  constructor() {
    
  }

  ngOnInit(): void {
    console.log('child:ngOnInit');
  }
  
  ngOnChanges(): void {
    console.log('child:ngOnChanges');
  }
   
  ngDoCheck(): void {
    console.log('child:ngDoCheck');
  }
  
  ngOnDestroy(): void {
    console.log('child:ngOnDestroy');
  }
}
