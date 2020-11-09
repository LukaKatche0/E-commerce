import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productId: string;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    // ამ პროდუქტის id-თ გამოვიძახოთ სერვისი და დავაბრუნებინოთ დეტალური ინფორმაცია პროდუქტზე
  }

  calc(): number {
    return 2 + 5;
  }

}
