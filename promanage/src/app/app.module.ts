import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { Router,RouterModule,Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductformComponent } from './components/productform/productform.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ProductGridComponent } from './components/product-grid/product-grid.component';
import { HomepageComponent } from './components/homepage/homepage.component';

const route : Routes = [
 
  {path:'welcome',component:WelcomeComponent} , 
  {path:'',component:HomepageComponent},
  {path : 'product',component : ProductListComponent } , 
  {path : 'product/:categoryid',component : ProductListComponent },
  {path : 'search/:searchName',component : ProductListComponent },
  {path : 'categories' , component :CategoryListComponent} , 
  {path : 'productform',component : ProductformComponent},
  {path: 'update/:id',component: ProductformComponent},
  {path: 'productgrid', component: ProductGridComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    ProductListComponent,
    ProductformComponent,
    WelcomeComponent,
    ProductGridComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
