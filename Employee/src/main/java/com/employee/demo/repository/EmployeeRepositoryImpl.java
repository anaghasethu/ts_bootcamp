package com.employee.demo.repository;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.employee.demo.entity.Department;
import com.employee.demo.entity.Employee;

@Repository
public class EmployeeRepositoryImpl implements EmployeeRepository {

	@Autowired
	EntityManager entityManager;

	@Override
	public List<Employee> findAll() {
		// TODO Auto-generated method stub
		Session currentSession = entityManager.unwrap(Session.class);

		Query<Employee> query = currentSession.createQuery("select e from Employee e", Employee.class);

		List<Employee> empList = query.getResultList();
		return empList;
	}

	@Override
	public List<Department> findAllDept() {
		// TODO Auto-generated method stub
		Session currentSession = entityManager.unwrap(Session.class);

		Query<Department> query = currentSession.createQuery("select d from Department d", Department.class);

		List<Department> deptList = query.getResultList();
		return deptList;
	}

	@Override
	public Employee findEmp(int id) {
		// TODO Auto-generated method stub
		Session currentSession = entityManager.unwrap(Session.class);

		
		return currentSession.get(Employee.class,id);
	}

	@Override
	public Employee UpdateEmp(int id, Employee e) {
		// TODO Auto-generated method stub
		Session currentSession = entityManager.unwrap(Session.class);
		
		currentSession.update(e);
		return null;
	}

}
