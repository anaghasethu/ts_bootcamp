package com.employee.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Department")
public class Department {
	
	@Id
	@Column(name = "deptno")
	private int DepNo;
	@Column(name = "departmentname")
	private String DepartmentName;
	@Column(name = "location")
	private String Location;
	public Department() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Department(int depNo, String departmentName, String location) {
		super();
		DepNo = depNo;
		DepartmentName = departmentName;
		Location = location;
	}
	public int getDepNo() {
		return DepNo;
	}
	public void setDepNo(int depNo) {
		DepNo = depNo;
	}
	public String getDepartmentName() {
		return DepartmentName;
	}
	public void setDepartmentName(String departmentName) {
		DepartmentName = departmentName;
	}
	public String getLocation() {
		return Location;
	}
	public void setLocation(String location) {
		Location = location;
	}
	@Override
	public String toString() {
		return "Department [DepNo=" + DepNo + ", DepartmentName=" + DepartmentName + ", Location=" + Location + "]";
	}
	
	

}
