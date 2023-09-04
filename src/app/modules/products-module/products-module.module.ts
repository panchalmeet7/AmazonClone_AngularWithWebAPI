import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsModuleRoutingModule } from './products-module-routing.module';
import { ProductsModuleComponent } from './products-module.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

@NgModule({
  declarations: [
    ProductsModuleComponent,
    ProductsComponent,
    ProductComponent,
    ProductDetailsComponent,
  ],
  imports: [CommonModule, ProductsModuleRoutingModule],
})
export class ProductsModuleModule {}
