package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "productcategory")
public class Category {

	@Id
	@Column(name = "categoryid")
	private int categoryid;
	@Column(name = "categoryname")
	private String categoryname;
	public Category() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Category(int categoryid, String categoryname) {
		super();
		this.categoryid = categoryid;
		this.categoryname = categoryname;
	}
	public int getCategoryid() {
		return categoryid;
	}
	public void setCategoryid(int categoryid) {
		this.categoryid = categoryid;
	}
	public String getCategoryname() {
		return categoryname;
	}
	public void setCategoryname(String categoryname) {
		this.categoryname = categoryname;
	}
	@Override
	public String toString() {
		return "ProductCategory [categoryid=" + categoryid + ", categoryname=" + categoryname + "]";
	}
}
