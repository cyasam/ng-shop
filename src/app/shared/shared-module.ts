import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductList } from '../components/product-list/product-list';

@NgModule({
  declarations: [ProductList],
  imports: [CommonModule],
  exports: [ProductList],
})
export class SharedModule {}
