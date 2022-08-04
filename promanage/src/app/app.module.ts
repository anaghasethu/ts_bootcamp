import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { Router,RouterModule,Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductformComponent } from './components/productform/productform.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ProductGridComponent } from './components/product-grid/product-grid.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CartComponent } from './components/cart/cart.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './components/login/login.component';

const route : Routes = [
  {path: 'login',  component:LoginComponent},
  {path:'welcome',component:WelcomeComponent} , 
  {path:'',component:HomepageComponent},
  {path : 'product',canActivate:[AuthGuard] ,component : ProductListComponent } , 
  {path : 'product/:categoryid',canActivate:[AuthGuard],component : ProductListComponent },
  {path : 'search/:searchName',canActivate:[AuthGuard],component : ProductListComponent },
  {path : 'categories' ,canActivate:[AuthGuard] , component :CategoryListComponent} , 
  {path : 'productform',canActivate:[AuthGuard] ,component : ProductformComponent},
  {path: 'update/:id',canActivate:[AuthGuard],component: ProductformComponent},
  {path: 'productgrid',canActivate:[AuthGuard] , component: ProductGridComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    ProductListComponent,
    ProductformComponent,
    WelcomeComponent,
    ProductGridComponent,
    HomepageComponent,
    CartComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
