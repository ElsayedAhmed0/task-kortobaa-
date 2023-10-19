import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { BunnerComponent } from './components/bunner/bunner.component';
import { ProductsCardComponent } from './components/products-card/products-card.component';
import { ProductRecentlyViewComponent } from './components/product-recently-view/product-recently-view.component';
import { RouterModule } from '@angular/router';
import { WishlistModule } from '../wishlist/wishlist.module';
import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';
import { ProductCategoryComponent } from './components/product-category/product-category.component';



@NgModule({
  declarations: [
    AllProductsComponent,
    BunnerComponent,
    ProductsCardComponent,
    ProductRecentlyViewComponent,
    ProductCategoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    WishlistModule,
    MaterialModule,
    SharedModule
  ],
  exports:[
    AllProductsComponent
  ]

})
export class ProductsModule { }
