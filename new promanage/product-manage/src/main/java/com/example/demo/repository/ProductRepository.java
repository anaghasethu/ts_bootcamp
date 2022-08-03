package com.example.demo.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.demo.entity.Product;
@RepositoryRestResource(path = "product")
@CrossOrigin("http://localhost:4200/")
public interface ProductRepository extends JpaRepository<Product, Integer> {

	public List<Product> findByName(String name);
	public List<Product> findBycategoryid(@RequestParam("categoryid") Integer categoryid);
}
