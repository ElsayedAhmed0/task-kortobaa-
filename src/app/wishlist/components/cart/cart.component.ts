import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../../service/wishlist.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  CartProduct: any[] = []
  constructor(private service: WishlistService) { }

  ngOnInit(): void {
    this.getCartProduct()
  }
  getCartProduct() {
    if ("theCart" in localStorage) {
      this.CartProduct = JSON.parse(localStorage.getItem("theCart")!)
    }

  }
}
