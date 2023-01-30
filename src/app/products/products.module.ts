import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products/products.component';

import { ProductDataService } from '../core/products/product-data.service';
import { PmMaterialModule } from '../shared/material-module';


@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,PmMaterialModule
  ],
  providers: [ProductDataService]
})
export class ProductsModule { }
