import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsModuleComponent } from './products-module.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsModuleComponent,
    children: [
      { path: '', component: ProductsComponent },
      { path: 'details', component: ProductDetailsComponent },
      // { path: 'details', component: ProductDetailsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsModuleRoutingModule {}
