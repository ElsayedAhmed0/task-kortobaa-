import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-products-card',
  templateUrl: './products-card.component.html',
  styleUrls: ['./products-card.component.scss']
})
export class ProductsCardComponent implements OnInit {
  @Input() data: any = {}
  @Output() item = new EventEmitter
  status: boolean = false;
  id: any
  // data: any
  loading: boolean = false
  addbtn: boolean = false
  CartProduct: any[] = []
  constructor(private route: ActivatedRoute, private service: ProductService) {
    this.id = this.route.snapshot.paramMap.get("id")
  }

  ngOnInit(): void {
  }
  addToCart(data: any) {
    if ("theCart" in localStorage) {
      this.CartProduct = JSON.parse(localStorage.getItem("theCart")!)
      let filalCart = this.CartProduct.find(item => item.id == data.id && item.title == data.title)
      if (filalCart) {
        alert("this items already i dart")
      } else {
        this.CartProduct.push(data)
        localStorage.setItem("theCart", JSON.stringify(this.CartProduct))
      }
    } else {
      this.CartProduct.push(data)
      localStorage.setItem("theCart", JSON.stringify(this.CartProduct))
    }

  }
}
