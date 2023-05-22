import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit{
  user: User;

  constructor() {
    this.user = new User();
  }

  ngOnInit(): void {
    
  }

  SaveData(form: NgForm) {
    if(form.valid) {
      console.log(this.user);
    }
  }
}

export class User {
  name: string | undefined;
  username: string | undefined;
  email: string | undefined;
  password: string | undefined;
  confirmPassword: string | undefined;
  contact: string | undefined;
}
