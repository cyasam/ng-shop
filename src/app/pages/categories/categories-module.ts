import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Categories } from './categories';
import { CategoryProductList } from '../../components/category-product-list/category-product-list';
import { CategoriesList } from '../../components/categories-list/categories-list';
import { SharedModule } from '../../shared/shared-module';

@NgModule({
  declarations: [Categories, CategoriesList, CategoryProductList],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: CategoriesList },
      { path: ':slug', component: CategoryProductList },
    ]),
  ],
})
export class CategoriesModule {}
