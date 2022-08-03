import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { category } from 'src/app/common/category';
import { product } from 'src/app/common/product';
import { ManagementServiceService } from 'src/app/services/ManageService.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: product[]
  categories: category[]
  searchByname: string
  constructor(private service: ManagementServiceService, private route: Router) { }

  ngOnInit(): void {
    this.getAllProducts()
    // this.getproductByname("printer")
  }

  getAllProducts(){
   this.service.getAllProducts().subscribe(data => {
    console.log(data)
    this.products = data
   })
  }

  getProductByName(name: string){
    this.service.getProductByName(this.searchByname).subscribe(data => {
      this.products = data
    })

  }
   
  updateProduct(id:number){
    this.route.navigateByUrl("/update/"+id)
   }
 
   deleteProduct(id: number) {
    if(confirm("Do you want to delete")) {
      this.service.deleteProduct(id).subscribe(data => {
        console.log("Deleted")
        this.getAllProducts();
      })
    }
   }

}


