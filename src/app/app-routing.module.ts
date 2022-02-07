import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './auth.guard';

const routes: Routes = [
  //{ path: '', redirectTo: '', pathMatch: 'full' },
  //{ path: 'profile/access-accounts', loadChildren: () => import('./pages/profile/access-accounts/access-accounts.module').then(m => m.AccessAccountsModule) },
  //{ path: 'profile/personal-details', component: PersonalDetailsComponent },
  //{ path: 'profile/access-accounts', component: AccessAccountsComponent },
  //{ path: 'profile', component: ProfileComponent },

  { path: 'mi-cuenta', loadChildren: () => import('./pages/my-account/my-account.module').then(m => m.MyAccountModule) },
  { path: 'carrito', loadChildren: () => import('./pages/shopping-cart/shopping-cart.module').then(m => m.ShoppingCartModule), canActivate: [AuthGuard] },
  { path: 'profile', loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule) },
  { path: '', loadChildren: () => import('./pages/main-page/main-page.module').then(m => m.MainPageModule) },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top', // Hace scroll hasta el principio de la pagina cada vez q se cambia de url
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
