import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page.component';

import { MovilesComponent } from './moviles/moviles.component';
import { ProductoComponent } from './moviles/producto/producto.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'moviles/producto', component: ProductoComponent},
      { path: 'moviles', component: MovilesComponent},
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
