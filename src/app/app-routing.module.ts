import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    // initially our app will load only products module and its child components
    path: '',
    loadChildren: () =>
      import('./modules/products-module/products-module.module').then(
        (m) => m.ProductsModuleModule
      ),
  },
  {
    path: 'test',
    loadChildren: () =>
      import('./modules/test/test.module').then((m) => m.TestModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
