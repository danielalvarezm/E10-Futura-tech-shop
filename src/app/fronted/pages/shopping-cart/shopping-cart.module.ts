import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module'

import { ShoppingCartComponent } from './shopping-cart.component';
import { EnvioComponent } from './tramitar-compra/envio/envio.component';
import { DatosPersonalesComponent } from './tramitar-compra/datos-personales/datos-personales.component';
import { PagoComponent } from './tramitar-compra/pago/pago.component';
import { ConfirmacionComponent } from './tramitar-compra/confirmacion/confirmacion.component';
import { ResumenCompraComponent } from './tramitar-compra/components/resumen-compra/resumen-compra.component';

@NgModule({
  declarations: [
    ShoppingCartComponent,
    EnvioComponent,
    DatosPersonalesComponent,
    PagoComponent,
    ConfirmacionComponent,
    ResumenCompraComponent
  ],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ShoppingCartModule { }
