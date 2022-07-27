package com.employee.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.employee.demo.entity.Department;
import com.employee.demo.entity.Employee;


public interface EmployeeService {
	
	public List<Employee> findAll();

	public List<Department> findAllDept();

	public Employee findEmp(int id);

	public Employee UpdateEmp(int id, Employee e);

}
