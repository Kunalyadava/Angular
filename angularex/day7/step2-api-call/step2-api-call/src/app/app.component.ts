import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>
    <hr>
    <table>
      <thead>
        <tr>
          <th>Sl #</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Avatar</th>
          <th>eMail</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let user of usersdata.data"> 
          <td>{{ user.id }}</td>
          <td>{{ user.first_name }}</td>
          <td>{{ user.last_name }}</td>
          <td>
            <img [src]="user.avatar" [alt]="user.first_name" width="60">
          </td>
          <td>{{ user.email }}</td>
        </tr>
      </tbody>
    </table>
  `,
  styles: []
})
export class AppComponent {
  title = "AJAX in Angular";
  usersdata:any = {};
  constructor(private ud:UserService){
    // empty
  }
  ngOnInit(){
    this.ud.getUserData().subscribe( res => this.usersdata = res );
  }
}
