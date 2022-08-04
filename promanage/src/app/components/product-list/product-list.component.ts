import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  currentCatId: number
  products: product[]
  categories: category[]
  searchByname: string
  constructor(private service: ManagementServiceService, private route: Router, private activeroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllProducts()
    // this.getproductByname("printer")
    this.activeroute.paramMap.subscribe(() => {
      this.getAllProducts()
    });
  }


  getAllProducts(){
    const hasCatId:boolean = this.activeroute.snapshot.paramMap.has("categoryid");
    if(hasCatId){
      this.currentCatId = +this.activeroute.snapshot.paramMap.get("categoryid");
      this.service.getProductByCatId(this.currentCatId).subscribe( data => {
        console.log(data);
        this.products = data
      })
    } else {
        this.service.getAllProducts().subscribe(data => {
        console.log(data)
        this.products = data
       })
    }
    
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


