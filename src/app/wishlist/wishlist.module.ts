import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { CartComponent } from './components/cart/cart.component';



@NgModule({
  declarations: [
    WishlistComponent,
    CartComponent
  ],
  imports: [
    CommonModule
  ]
})
export class WishlistModule { }
