package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.demo.entity.Employee;

@RepositoryRestController(path = "/emp")
@CrossOrigin("http://localhost:4200/")
public interface EmpRepository extends JpaRepository<Employee, Integer> {

}
