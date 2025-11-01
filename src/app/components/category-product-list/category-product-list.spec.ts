import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryProductList } from './category-product-list';

describe('CategoryProductList', () => {
  let component: CategoryProductList;
  let fixture: ComponentFixture<CategoryProductList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoryProductList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryProductList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
