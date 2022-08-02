import { Component, OnInit } from '@angular/core';
import { category } from 'src/app/common/category';
import { ManagementServiceService } from 'src/app/services/ManageService.service';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})


export class CategoryListComponent implements OnInit {
  categories: category[]
  constructor(private service: ManagementServiceService) {}

  ngOnInit(): void {
    this.listOfCategories()
  }

  listOfCategories(){
    this.service.getAllCategories().subscribe( data => {
      console.log(data)
      this.categories = data
    })
  }

}
