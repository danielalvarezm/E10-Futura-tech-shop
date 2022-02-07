import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartComponent } from './shopping-cart.component';
import { ConfirmacionComponent } from './tramitar-compra/confirmacion/confirmacion.component';
import { DatosPersonalesComponent } from './tramitar-compra/datos-personales/datos-personales.component';
import { EnvioComponent } from './tramitar-compra/envio/envio.component';
import { PagoComponent } from './tramitar-compra/pago/pago.component';

const routes: Routes = [
  // { path: '', component: ShoppingCartComponent },
  // { path: 'envio', loadChildren: () => import('./tramitar-compra/envio/envio.module').then(m => m.EnvioModule) },
  // { path: 'datos-personales', loadChildren: () => import('./tramitar-compra/datos-personales/datos-personales.module').then(m => m.DatosPersonalesModule) },
  // { path: 'pago', loadChildren: () => import('./tramitar-compra/pago/pago.module').then(m => m.PagoModule) },
  // { path: 'confirmacion', loadChildren: () => import('./tramitar-compra/confirmacion/confirmacion.module').then(m => m.ConfirmacionModule) },
  // { path: '**', redirectTo: '', pathMatch: 'full' }

  {
    path: '',
    children: [
      { path: 'envio', component: EnvioComponent},
      { path: 'datos-personales', component: DatosPersonalesComponent},
      { path: 'pago', component: PagoComponent},
      { path: 'confirmacion', component: ConfirmacionComponent},
      { path: '', component: ShoppingCartComponent},
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingCartRoutingModule { }
