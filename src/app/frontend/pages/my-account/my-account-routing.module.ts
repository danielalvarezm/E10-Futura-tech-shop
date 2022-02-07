import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyAccountComponent } from './my-account.component';

const routes: Routes = [
  { path: '', component: MyAccountComponent }, 
  { path: 'crear-cuenta', loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyAccountRoutingModule { }
