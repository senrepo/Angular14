import { HttpClient } from '@angular/common/http';
import { Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-parent-hooks',
  templateUrl: './parent-hooks.component.html',
  styleUrls: ['./parent-hooks.component.css']
})
export class ParentHooksComponent implements OnInit, DoCheck, OnDestroy, OnChanges{
  name: string | undefined;
  users: any[] | undefined;
  subscription: Subscription | undefined;

constructor(private client: HttpClient) {
  this.name = 'mohan';
}

ngOnInit(): void {
  console.log('parent:ngOnInit');
  const url = 'https://dummyjson.com/users';
  this.subscription = this.client.get<any[]>(url).subscribe(res=> {
    if(res != null) {
      this.users = res;
      console.log(res);
    }
  });
}

ngOnChanges(): void {
  console.log('parent:ngOnChanges');
}

ngDoCheck(): void {
  console.log('parent:ngDoCheck');
}

ngOnDestroy(): void {
  console.log('parent:ngOnDestroy');
  this.subscription?.unsubscribe();
}
}
