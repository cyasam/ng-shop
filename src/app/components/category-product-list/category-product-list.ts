import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-product-list',
  standalone: false,
  templateUrl: './category-product-list.html',
  styleUrl: './category-product-list.css',
})
export class CategoryProductList implements OnInit {
  products: Product[] = [];
  categorySlug: string | null = null;
  loading = true;

  constructor(private productService: ProductService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.categorySlug = params.get('slug');
      this.fetchProducts();
    });
  }

  fetchProducts(): void {
    if (!this.categorySlug) return;

    this.loading = true;
    this.productService.getProductsByCategory(this.categorySlug).subscribe({
      next: (data: Product[]) => {
        this.products = data;
      },
      error: (err) => console.error('Ürün çekme hatası:', err),
      complete: () => {
        this.loading = false;
      },
    });
  }
}
