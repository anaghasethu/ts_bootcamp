import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Department } from 'src/app/common/department';
import { ManagementServiceService } from 'src/app/services/managementService.service';

@Component({
  selector: 'app-dept-list',
  templateUrl: './dept-list.component.html',
  styleUrls: ['./dept-list.component.css']
})
export class DeptListComponent implements OnInit {

  departments : Department[]
  constructor(private service: ManagementServiceService) { }

  ngOnInit(): void {
    this.listOfDepartments()
  }
  listOfDepartments(){
    this.service.getAllDepartments().subscribe(data=>{
      console.log(data)
      this.departments = data
    })
  }

}
