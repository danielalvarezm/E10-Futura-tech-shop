import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessAccountsComponent } from './access-accounts/access-accounts.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { MyAddressComponent } from './address/my-address.component';
import { MyWalletComponent } from './my-wallet/my-wallet.component';
import { AddCardComponent } from './my-wallet/add-card/add-card.component';
import { AddAddressComponent } from './address/add-address/add-address.component';
import { ProfileComponent } from './profile.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { FavoritesComponent } from './favorites/favorites.component';



const routes: Routes = [
 
  {
    path: '',
    children: [
      { path: 'cuenta-acceso', component: AccessAccountsComponent},
      { path: 'datos-personales', component: PersonalDetailsComponent},
      { path: 'mis-pedidos', component: MyOrdersComponent},
      { path: 'favoritos', component: FavoritesComponent},
      { path: 'direccion/nueva-direccion', component: AddAddressComponent},
      { path: 'direccion', component: MyAddressComponent},
      { path: 'monedero/nueva-tarjeta', component: AddCardComponent},
      { path: 'monedero', component: MyWalletComponent},
      { path: '', component: ProfileComponent},
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
