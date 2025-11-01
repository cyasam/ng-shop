import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Home } from './home';
import { HomeProductList } from '../../components/home-product-list/home-product-list';
import { SharedModule } from '../../shared/shared-module';

@NgModule({
  declarations: [Home, HomeProductList],
  imports: [CommonModule, SharedModule, RouterModule.forChild([{ path: '', component: Home }])],
  exports: [],
})
export class HomeModule {}
