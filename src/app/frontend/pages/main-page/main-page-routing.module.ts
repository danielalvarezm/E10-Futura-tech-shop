import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page.component';

import { MovilesComponent } from './moviles/moviles.component';
import { ProductoComponent } from './moviles/producto/producto.component';
import { LaptopsComponent } from './laptops/laptops.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'moviles/producto/:id', component: ProductoComponent},
      { path: 'moviles', component: MovilesComponent},
      { path: 'ordenadores/:id', component: ProductoComponent},
      { path: 'ordenadores', component: LaptopsComponent},
      { path: '', component: MainPageComponent},
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ]
  }
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule { }
