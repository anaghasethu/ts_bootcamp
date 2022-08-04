import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { category } from 'src/app/common/category';
import { product } from 'src/app/common/product';
import { ManagementServiceService } from 'src/app/services/ManageService.service';
import { CategoryListComponent } from '../category-list/category-list.component';

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.css']
})
export class ProductformComponent implements OnInit {

  categories: category[]
  product: product = new product(0,"","","",0,"",true,0,new Date(),new Date(),0)
  isEditable: boolean = false

  constructor(private service : ManagementServiceService, private route:Router,private activateRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.listOfCategories()
    this.activateRoute.paramMap.subscribe(() => {this.getProductById()})
  }

  getProductById(){
    const pid = +this.activateRoute.snapshot.paramMap.get("id");
    console.log(pid);
    if(pid>0){
      this.isEditable = true
      this.service.getProductById(pid).subscribe((data => {
        this.product = data
      }))
    }
  }

  listOfCategories(){
    this.service.getAllCategories().subscribe(data => {
      console.log(data)
      this.categories = data
    })
  }

  onsubmit(){
    console.log(this.product)
    if(this.isEditable){ // iseditable = true
        this.service.updateProduct(this.product).subscribe(data =>{
        console.log(data)
        this.route.navigateByUrl("/product")
      })

   }else{
      this.service.saveProduct(this.product).subscribe(data=>{
      console.log(data)
      this.route.navigateByUrl("/product")
    })
  }}

}

