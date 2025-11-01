import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProductList } from './home-product-list';

describe('HomeProductList', () => {
  let component: HomeProductList;
  let fixture: ComponentFixture<HomeProductList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeProductList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeProductList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
