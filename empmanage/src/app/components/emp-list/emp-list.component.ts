import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/common/employee';
import { ManagementServiceService } from 'src/app/services/managementService.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  employees: Employee[] 
  constructor(private service: ManagementServiceService,private route : Router) { }

  ngOnInit(): void {
    this.listOfEmployees()
  }
  listOfEmployees(){
    this.service.getAllEmployees().subscribe(data=>{
      console.log(data)
      this.employees = data
    })
  }

  updateEmp(empno:number){
   this.route.navigateByUrl("/update/"+empno)
  }


}
