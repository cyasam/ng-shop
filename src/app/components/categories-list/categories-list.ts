import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-list',
  standalone: false,
  templateUrl: './categories-list.html',
  styleUrl: './categories-list.css',
})
export class CategoriesList implements OnInit {
  categories: string[] = [];
  selectedCategory: string | null = null;
  loading = true;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<string[]>('https://fakestoreapi.com/products/categories').subscribe({
      next: (data: string[]) => {
        this.categories = data;
      },
      error: (err) => console.error('Kategori çekme hatası:', err),
      complete: () => {
        this.loading = false;
      },
    });
  }
}
