import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  catDetails(){
    this.route.navigateByUrl("/categories")
  }

  productDetails(){
    this.route.navigateByUrl("/product")
  }

  proDetails(){
    this.route.navigateByUrl("/productgrid")
  }

  filterByProduct(){
    this.route.navigateByUrl("/productgrid")
  }

  filterByCategory(){
    this.route.navigateByUrl("/productgrid")
  }

  addProduct(){
    this.route.navigateByUrl("/productform")
  }
}
