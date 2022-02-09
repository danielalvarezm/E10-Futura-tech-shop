import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { RouterModule } from '@angular/router';
import { AccessAccountsComponent } from './access-accounts/access-accounts.component';
import { AddAddressComponent } from './address/add-address/add-address.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { MyWalletComponent } from './my-wallet/my-wallet.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { MyAddressComponent } from './address/my-address.component';
import { AddSaldoComponent } from './my-wallet/add-saldo/add-saldo.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProfileComponent,
    AccessAccountsComponent,
    MyAddressComponent,
    AddAddressComponent,
    MyOrdersComponent,
    MyWalletComponent,
    AddSaldoComponent,
    FavoritesComponent,
    PersonalDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
