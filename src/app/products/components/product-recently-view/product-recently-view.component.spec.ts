import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRecentlyViewComponent } from './product-recently-view.component';

describe('ProductRecentlyViewComponent', () => {
  let component: ProductRecentlyViewComponent;
  let fixture: ComponentFixture<ProductRecentlyViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductRecentlyViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductRecentlyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
