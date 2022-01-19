import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagoComponent } from './pago.component';
import { ResumenCompraModule } from '../components/resumen-compra/resumen-compra.module';

import { PagoRoutingModule } from './pago-routing.module';
import { ShoppingCartRoutingModule } from '../../shopping-cart-routing.module';

@NgModule({
    declarations: [
        PagoComponent
    ],
    imports:[
        PagoRoutingModule,
        ResumenCompraModule,
        ShoppingCartRoutingModule
    ]
})

export class PagoModule {}