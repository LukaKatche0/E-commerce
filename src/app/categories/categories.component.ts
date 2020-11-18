import { Component, OnInit } from '@angular/core';
import { ProductPreviewModel } from '../models/product-preview.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  productPreviews: Array<ProductPreviewModel>;
  
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts()
    .subscribe((products) => {
      this.productPreviews = products;
    });
  }

}
