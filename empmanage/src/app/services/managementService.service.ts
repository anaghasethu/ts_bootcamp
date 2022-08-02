import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,map } from 'rxjs';
import { Department } from '../common/department';
import { Employee } from '../common/employee';

@Injectable({
  providedIn: 'root'
})
 
export class ManagementServiceService {

    empURL = "http://localhost:8080/api/employees"
    deptURL  = "http://localhost:8080/api/departments"
    constructor( private httpClient : HttpClient) { }
  
    getAllEmployees() : Observable<Employee[]>{
      return this.httpClient.get<getEmployeeResponse>(this.empURL).pipe(map(response => response._embedded.employees))
    }
  
    getAllDepartments()  : Observable<Department[]>{
      return this.httpClient.get<getDepartmentResponse>(this.deptURL).pipe(map(response => response._embedded.departments))
    }
  
    saveEmployee(employee : Employee) : Observable<Employee>{
      console.log(employee)
  
      const httpOptions = {
        headers : new HttpHeaders({
            'Content-Type' : 'application/json',
            'Authorization' : 'auth-token',
            'Access-Control-Allow-Origin' : '*'
        })
      }
        
     
      return this.httpClient.post<Employee>(this.empURL,employee,httpOptions);
  }
  
  getEmployeeById(empID : number) : Observable<Employee>{
    const empIDURL  = "http://localhost:8080/api/employees/"+empID
  
   return this.httpClient.get<Employee>(empIDURL);
  }
  
  updateEmployee(employee : Employee): Observable<Employee>{
    console.log(employee)
  
    const httpOptions = {
      headers : new HttpHeaders({
          'Content-Type' : 'application/json',
          'Authorization' : 'auth-token',
          'Access-Control-Allow-Origin' : '*'
      })
    }
  
    return this.httpClient.put<Employee>(this.empURL+`/${employee.empno}`,employee,httpOptions)
  }
  
  
  }
  interface getEmployeeResponse {
    _embedded : {
      employees : Employee[]
    }
  }
  
  interface getDepartmentResponse{
    _embedded : {
      departments : Department[]
    }
  }
  