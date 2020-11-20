import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductPreviewModel } from '../models/product-preview.model';
import { UserModel } from '../models/user.model';
import { AuthService } from '../services/auth.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productId: string;
  product: ProductPreviewModel;
  userInfo: UserModel;
  imageObject: Array<object> = [];
  imageSize = {width: '300px', height: '300px'};
  @ViewChild('productPrice', { static: false }) productPrice: ElementRef;
  constructor(private activatedRoute: ActivatedRoute, private authService: AuthService, private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.userInfo = this.authService.getUserInfo();
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    this.productService.getProductById(this.productId)
      .subscribe((productFromApi) => {
        this.product = productFromApi;
        this.setUpImagesForSliders(productFromApi.images);
        this.setUpImagesForSliders(productFromApi.images);
        // setTimeout(() => {
        //   this.productPrice.nativeElement.style.color = 'red';
        // }, 0);
      })
    // ამ პროდუქტის id-თ გამოვიძახოთ სერვისი და დავაბრუნებინოთ დეტალური ინფორმაცია პროდუქტზე
  }

  buyProduct() {
    if (this.userInfo.balance < this.product.price) {
      alert('not enough money');
    } else {
      this.userInfo.balance -= this.product.price;
      this.authService.buyProduct(this.userInfo)
        .subscribe((userInfo) => {
          this.authService.logIn(userInfo);
          this.authService.shouldUpdateBalance.next();
          alert('transaction was successful!');
          this.router.navigate(['categories']);
        })
    }
  }

  setUpImagesForSliders(images: string[]) {
    images.forEach(image => {
      this.imageObject.push({
        image: image,
        thumbImage: image
      });
    });
  }

}
