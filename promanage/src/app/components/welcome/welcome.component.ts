import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { category } from 'src/app/common/category';
import { ManagementServiceService } from 'src/app/services/ManageService.service';
import { ProductListComponent } from '../product-list/product-list.component';
import { ActivatedRoute } from '@angular/router';
import { product } from 'src/app/common/product';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  categories: category[]
  products: product[]
  newcategoryid: number
  constructor(private service: ManagementServiceService, private route: Router, private activeroute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  catDetails(){
    this.route.navigateByUrl("/categories")
  }

  getAllProducts(){
     const hasCatId:boolean = this.activeroute.snapshot.paramMap.has("categoryid");
     if(hasCatId){
      this.newcategoryid = +this.activeroute.snapshot.paramMap.get("categoryid");
      this.service.getProductByCatId(this.newcategoryid).subscribe(data => {
        console.log(data)
        this.products = data
      })
     } else {
      this.service.getAllProducts().subscribe(data => {
        console.log(data)
        this.products = data
       })
     }
   }
 
  getAllCategories(){
    this.service.getAllCategories().subscribe(data => {
     console.log(data)
     this.categories = data
    })
   }

  productDetails(){
    this.route.navigateByUrl("/product")
  }

  proDetails(){
    this.route.navigateByUrl("/productgrid")
  }

  
  filterByCategory(){
    this.route.navigateByUrl("/product")
  }

  addProduct(){
    this.route.navigateByUrl("/productform")
  }
}
