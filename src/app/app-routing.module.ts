import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddProductComponent } from './add-product/add-product.component';
import { CategoriesComponent } from './categories/categories.component';
import { ContactComponent } from './contact/contact.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { ProductComponent } from './product/product.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  // ავტომატურად დაა-redirect-ოს home-ზე
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  //პირდაპირ home component გამოაჩინოს
  // {
  //   path: '',
  //   component: HomeComponent
  // },
  {
    path: 'login',
    component: LogInComponent
  },
  {
    path: 'signup',
    component: SignUpComponent
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'add-product',
    component: AddProductComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'product/:id',
    component: ProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
