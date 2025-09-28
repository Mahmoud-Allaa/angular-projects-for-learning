import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = 'https://fakestoreapi.com/products'; // you can replace with your own API
  constructor(private http: HttpClient) {}

  // Fetch all products
  getProducts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Fetch single product by ID
  getProductById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
