import { Component, OnInit } from '@angular/core';
import { ProductPreviewModel } from '../models/product-preview.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  testProductPreview: ProductPreviewModel = {
    id: 1,
    description: 'ვყიდი ფეხსაცმელს',
    price: 200,
    title: 'ფეხსაცმელი'
  };
  
  number = 5;
  constructor() { }

  ngOnInit(): void {
  }

}
