import { NgModule } from '@angular/core';

import { DatosPersonalesComponent } from './datos-personales.component';

import { ResumenCompraModule } from '../components/resumen-compra/resumen-compra.module';

import { DatosPersonalesRoutingModule } from './datos-personales-routing.module';
import { ShoppingCartRoutingModule } from '../../shopping-cart-routing.module';

@NgModule({
    declarations: [
        DatosPersonalesComponent
    ],
    imports:[
        DatosPersonalesRoutingModule,
        ResumenCompraModule,
        ShoppingCartRoutingModule
    ]
})

export class DatosPersonalesModule {}