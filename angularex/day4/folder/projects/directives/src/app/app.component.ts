import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <label for="terms">Show Terms and Conditions</label>
  <input id="terms" type="checkbox" (change)="show = !show">
  <fieldset *ngIf="show">
    <legend>Terms and Conditions</legend>
    <hr>
    <p>1st condition</p>
    <p>2st condition</p>
    <p>3st condition</p>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias autem id temporibus! Eaque eligendi, tenetur, voluptates quos culpa, cum id beatae ipsum nihil iusto error blanditiis non earum animi delectus.
    </p>
  </fieldset>  
  <ng-template [ngIf]="!show">{{ title }}</ng-template>
  <hr>
  <ul>
    <li>{{ avengers[0] }}</li>
  </ul>
  <ol>
    <li *ngFor="let hero of avengers">{{ hero }}</li>
  </ol>
  `,
  styles: []
})
export class AppComponent {
  title = 'directives';
  show = false;
  avengers = ["Ironman","Spiderman","Hulk","Thor","Dr Strange","Captain America","Black Widow","Hawkeye","Groot","Antman"]
}
