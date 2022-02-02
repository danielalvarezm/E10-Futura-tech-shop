import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page.component';
import { MainPageRoutingModule } from './main-page-routing.module';

import { SliderComponent } from './components/slider/slider.component';
import { CategoriasRelevantesComponent } from './components/categorias-relevantes/categorias-relevantes.component';
import { ProductsInterestComponent } from './components/products-interest/products-interest.component';
import { NewsComponent } from './components/news/news.component';
import { ProductoComponent } from './moviles/producto/producto.component';
import { MovilesComponent } from './moviles/moviles.component';

@NgModule({
  declarations: [
    MainPageComponent,
    SliderComponent,
    CategoriasRelevantesComponent,
    ProductsInterestComponent,
    NewsComponent,
    MovilesComponent,
    ProductoComponent
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MainPageModule { }
