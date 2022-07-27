package com.employee.demo.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.employee.demo.entity.Department;
import com.employee.demo.entity.Employee;

@Repository
public interface EmployeeRepository {

	public List<Employee> findAll();

	public List<Department> findAllDept();

	public Employee findEmp(int id);

	public Employee UpdateEmp(int id, Employee e);
}
