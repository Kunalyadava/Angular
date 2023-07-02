import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { AppComponent } from './app.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

const routes: Routes = [
 {path:"", component:AppComponent},
 {path:"",redirectTo:'Home',pathMatch:'full'},
  { component: TemplateFormsComponent,  path:'template-forms'},
  { component: ReactiveFormsComponent,  path:'reactive-forms'}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
