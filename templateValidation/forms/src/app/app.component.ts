import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'templateformm';
  form={
    fname:'',
    lname:'',
    pan:'',
    mobile:'',
    email:'',
    age:''



  }
  integerRegex=/^\d+$/
  emailRegex="^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  registerFn(){
    console.log(this.form)
  }
}
