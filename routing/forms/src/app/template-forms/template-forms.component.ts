import { Component } from '@angular/core';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.scss']
})
export class TemplateFormsComponent {
  // title:'template-forms',
  title1: string = 'my template form'
  name = "sdfsdg"
  loginUser(item:any)
  {
    console.warn(item)
  }
clickHandler(message:string){
console.log(message)
}
}
