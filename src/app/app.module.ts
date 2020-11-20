import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductComponent } from './product/product.component';
import { ProductPreviewComponent } from './product-preview/product-preview.component';
import { LogInComponent } from './log-in/log-in.component';
import { TestPipe } from './pipes/test.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AddProductComponent } from './add-product/add-product.component';
import { MatIconModule } from '@angular/material/icon';
import { ​​​​​MatMenuModule }​​​​​ from'@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { NgImageSliderModule } from 'ng-image-slider';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    FooterComponent,
    ContactComponent,
    HomeComponent,
    CategoriesComponent,
    ProductComponent,
    ProductPreviewComponent,
    LogInComponent,
    TestPipe,
    TruncatePipe,
    SignUpComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatCardModule,
    HttpClientModule,
    MatIconModule,
    MatToolbarModule,
    ​​​​​MatMenuModule,
    NgImageSliderModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
