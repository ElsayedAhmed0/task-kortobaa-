import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  listRecntly: any[] = []
  secProduct: any[] = []
  wishlistProduct: any[] = []
  loading: boolean = false
  constructor(private service:ProductService) { }

  ngOnInit(): void {
    this.getTheRecntly()
  }
  getTheRecntly() {
    this.loading = true
    this.service.getRecntlyCard().subscribe((res: any) => {
      this.loading = false
      this.listRecntly = res
    })
  }
}
