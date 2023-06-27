import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SecondComp } from './second.component';

import { AppComponent } from './app.component';

@NgModule({
  //declarations is list of all components you can use in yr app
  declarations: [AppComponent, SecondComp],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent,SecondComp]
})
export class AppModule { }