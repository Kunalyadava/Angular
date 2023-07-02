import { Component } from '@angular/core';
import { AbstractControl,FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordMatch } from './passwordmatch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  integerRegex= /^(?:-(?:[1-9](?:\d{0,2}(?:,\d{3})+|\d*))|(?:0|(?:[1-9](?:\d{0,2}(?:,\d{3})+|\d*))))(?:.\d+|)$/;
  emailRegex="^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  title = 'reactive-form';

  registerForm=new FormGroup({
    fname:new FormControl("",[Validators.required,Validators.maxLength(32)]),
    lname:new FormControl("",[Validators.required,Validators.maxLength(32)]),
    age:new FormControl("",[Validators.required,Validators.maxLength(60),Validators.minLength(18),Validators.pattern(this.integerRegex)]),
    mobile:new FormControl("",[Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern(this.integerRegex)]),
    email:new FormControl("",[Validators.required,Validators.maxLength(32),Validators.pattern(this.emailRegex)]),
    password:new FormControl("",[Validators.required,Validators.maxLength(12),Validators.minLength(8)]),
    confirm_password:new FormControl("",[Validators.required,Validators.maxLength(32),Validators.minLength(8)]),


  },[passwordMatch("password","confirm_password")])
  getControl(name:any):AbstractControl|null{
    return this.registerForm.get(name)
  }
  registerFn(){
console.log(this.registerForm.value)
  }
}
