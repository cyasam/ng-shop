import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'https://fakestoreapi.com/';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    const url = new URL(`/products`, this.apiUrl);
    return this.http.get<Product[]>(url.toString());
  }

  getProductById(id: number): Observable<Product> {
    const url = new URL(`/products/${id}`, this.apiUrl);
    return this.http.get<Product>(url.toString());
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    const url = new URL(`/products/category/${category}`, this.apiUrl);

    return this.http.get<Product[]>(url.toString());
  }
}
