import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductPreviewModel } from '../models/product-preview.model';

@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.css']
})
export class ProductPreviewComponent implements OnInit, OnChanges {
  @Input() productPreview: ProductPreviewModel;
  constructor() { }

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

}
