import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { WishlistComponent } from './wishlist/components/wishlist/wishlist.component';
import { CartComponent } from './wishlist/components/cart/cart.component';
import { ProductCategoryComponent } from './products/components/product-category/product-category.component';

const routes: Routes = [
  {
    path: "products",
    component:AllProductsComponent
  },
  {
    path: "wishlist",
    component:WishlistComponent
  },
  {
    path:"carts",
    component:CartComponent
  },
  {
    path:"ProductCategory",
    component:ProductCategoryComponent
  },
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'products',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
