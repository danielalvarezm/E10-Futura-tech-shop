import { NgModule } from '@angular/core';

import { ConfirmacionComponent } from './confirmacion.component'

import { ResumenCompraModule } from '../components/resumen-compra/resumen-compra.module';

import { ShoppingCartRoutingModule } from '../../shopping-cart-routing.module';
import { ConfirmacionRoutingModule } from './confirmacion-routing.module';

@NgModule({
    declarations: [
        ConfirmacionComponent
    ],
    imports:[
        ConfirmacionRoutingModule,
        ResumenCompraModule,
        ShoppingCartRoutingModule
    ]
})

export class ConfirmacionModule {}