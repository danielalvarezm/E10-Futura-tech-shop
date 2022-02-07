import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnvioComponent } from './envio.component';
import { ResumenCompraModule } from '../components/resumen-compra/resumen-compra.module';

import { EnvioRoutingModule } from './envio-routing.module';
import { ShoppingCartRoutingModule } from '../../shopping-cart-routing.module';

@NgModule({
    declarations: [
        EnvioComponent
    ],
    imports:[
        EnvioRoutingModule,
        ResumenCompraModule,
        ShoppingCartRoutingModule
    ]
})

export class EnvioModule {}