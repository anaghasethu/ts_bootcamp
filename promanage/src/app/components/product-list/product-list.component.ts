import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { product } from 'src/app/common/product';
import { ManagementServiceService } from 'src/app/services/ManageService.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: product[]
  constructor(private service: ManagementServiceService, private route: Router) { }

  ngOnInit(): void {
    this.getAllProducts()
  }

  getAllProducts(){
   this.service.getAllProducts().subscribe(data => {
    console.log(data)
    this.products = data
   })
  }

  updateProduct(id:number){
    this.route.navigateByUrl("/update/"+id)
   }
 

}


