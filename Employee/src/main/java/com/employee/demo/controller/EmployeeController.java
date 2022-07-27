package com.employee.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.employee.demo.entity.Department;
import com.employee.demo.entity.Employee;
import com.employee.demo.service.EmployeeService;

@RestController
@RequestMapping("/employee")
public class EmployeeController {
	
	@Autowired
	private EmployeeService empservice;
	
	@GetMapping("/empList")
	public List<Employee> findAll() {
		
		return empservice.findAll();
		
	}
	
	@GetMapping("/findemp/{id}")
	public Employee findEmp(@PathVariable int id) {
		
		Employee e = empservice.findEmp(id);		
		return e;
		
	}
	
	@PutMapping("/updateemp/{id}")
	public String UpdateEmp(@PathVariable int id, @RequestBody Employee e) {
		
		empservice.UpdateEmp(id,e);		
		return "Added";
		
	}
	
	@GetMapping("/deptList")
	public List<Department> findAllDept() {
		
		return empservice.findAllDept();
		
	}
	

}
