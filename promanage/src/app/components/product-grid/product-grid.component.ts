import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { product } from 'src/app/common/product';
import { ManagementServiceService } from 'src/app/services/ManageService.service';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent implements OnInit {

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

}
