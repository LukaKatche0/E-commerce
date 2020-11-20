import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ProductPreviewModel } from '../models/product-preview.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  api_url = environment.apiUrl + '/products';
  constructor(private http: HttpClient) { }

  addProduct(product: ProductPreviewModel) {
    return this.http.post<ProductPreviewModel>(this.api_url, product);
  }

  getProductById(id: number | string) {
    return this.http.get<ProductPreviewModel>(`${this.api_url}/${id}`);
  }

  getProducts() {
    return this.http.get<Array<ProductPreviewModel>>(this.api_url);
  }

  updateProduct(product: ProductPreviewModel) {
    return this.http.put<ProductPreviewModel>(`${this.api_url}/${product.id}`, product);
  }

  deleteProduct(id: string | number) {
    return this.http.delete(`${this.api_url}/${id}`);
  }
}
