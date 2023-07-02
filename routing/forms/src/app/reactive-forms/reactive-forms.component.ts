import { Component } from '@angular/core';
import {FormGroup,FormControl,FormControlName }from "@angular/forms"
@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent {
title="angular reactive form";
loginForm=new FormGroup({
  user:new FormControl('sccd'),
  password:new FormControl('123')
})
loginUser(){
  console.log(this.loginForm.value)
}
}
