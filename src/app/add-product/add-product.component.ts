import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductPreviewModel } from '../models/product-preview.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  addProductForm: FormGroup;
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.addProductForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      price: new FormControl(null, [Validators.required, Validators.min(0)]),
      description: new FormControl(null, Validators.required),
      images: new FormArray([])
    });
  }

  get images() {
    return (<FormArray>this.addProductForm.get('images'));
  }

  addImage() {
    const newImage = new FormControl(null, Validators.required);
    this.images.push(newImage);
  }

  deleteImage(index: number) {
    this.images.removeAt(index);
  }

  getImages() {
    return this.images.controls;
  }

  onSubmit() {
    const newProduct: ProductPreviewModel = {
      title: this.addProductForm.get('title').value,
      price: this.addProductForm.get('price').value,
      description: this.addProductForm.get('description').value,
      images: this.addProductForm.get('images').value
    };
    this.productService.addProduct(newProduct)
    .subscribe((data) => {
      console.log(data);
      this.router.navigate(['']);
    });
  }

}
