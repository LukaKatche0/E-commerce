import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductPreviewModel } from '../models/product-preview.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productId: string;
  product: ProductPreviewModel;
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    this.productService.getProductById(this.productId)
    .subscribe((productFromApi) => {
      this.product = productFromApi;
      console.log(productFromApi);
    })
    // ამ პროდუქტის id-თ გამოვიძახოთ სერვისი და დავაბრუნებინოთ დეტალური ინფორმაცია პროდუქტზე
  }

  calc(): number {
    return 2 + 5;
  }

}
