package com.employee.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employee.demo.entity.Department;
import com.employee.demo.entity.Employee;
import com.employee.demo.repository.EmployeeRepository;

@Service
public class EmployeeServiceImpl implements EmployeeService{
	
	@Autowired
	private EmployeeRepository empRepo;

	@Override
	public List<Employee> findAll() {
		// TODO Auto-generated method stub
		return empRepo.findAll();
	}
	
	@Override
	public List<Department> findAllDept() {
		// TODO Auto-generated method stub
		return empRepo.findAllDept();
	}

	@Override
	public Employee findEmp(int id) {
		// TODO Auto-generated method stub
		return empRepo.findEmp(id);
	}

	@Override
	public Employee UpdateEmp(int id, Employee e) {
		// TODO Auto-generated method stub
		
		return empRepo.UpdateEmp(id, e);
		
	}
	
	

}
