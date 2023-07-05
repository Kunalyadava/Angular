import { Component } from '@angular/core';
import { UserdataService } from './userdata.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  name=""
  constructor(private user:UserdataService){
    console.log(this.user.getdata)
    this.name=this.user.getdata().name
  }
}
