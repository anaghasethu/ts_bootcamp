package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.demo.entity.Department;

@RepositoryRestController
@CrossOrigin("http://localhost:4200/")
public interface DeptRepository extends JpaRepository<Department, Integer> {

}
