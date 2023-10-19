import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-recently-view',
  templateUrl: './product-recently-view.component.html',
  styleUrls: ['./product-recently-view.component.scss']
})
export class ProductRecentlyViewComponent implements OnInit {
  @Input() data: any = {}
  @Output() item = new EventEmitter
  status: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
