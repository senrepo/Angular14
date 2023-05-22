import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  userForm: FormGroup;
  
  constructor(private fb: FormBuilder) {
    // this.userForm = new FormGroup({
    //   name: new FormControl('', [Validators.required]),
    //   email: new FormControl('', [Validators.required, Validators.email])      
    // });

    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', [Validators.required, this.CompareValidator('password')]]      
    });
  }

  ngOnInit(): void {
    
  }

  SaveData() {
    if( this.userForm.valid) {
      console.log(this.userForm.value);
    }
  }

  CompareValidator(otherControlName:string) {
    let thisControl: FormControl;
    let otherControl: FormControl;

    return (control: FormControl) => {
      if(!control.parent) {
        return null;
      }
      //first
      thisControl = control;
      //other
      otherControl = thisControl.parent?.get(otherControlName) as FormControl;
      otherControl.valueChanges.subscribe(()=> {
        thisControl.updateValueAndValidity();
      });
      //compare
      if(otherControl.value != thisControl.value) {
        return {
          matchValue: true
        };
      }
      return null;
    }
  }

}
