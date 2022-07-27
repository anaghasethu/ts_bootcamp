package com.employee.demo.entity;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Employee")
public class Employee {
	
	@Id
	@Column(name="empno")
	private int EmpNo;
	@Column(name="ename")
	private String Ename;
	@Column(name="job")
	private String job;
	@Column(name="hiredate")
	private String HireDate;
	@Column(name="managerid")
	private int ManagerId;
	@Column(name="salary")
	private int Salary;
	@Column(name="Commission")
	private float Commission;
	@Column(name="deptno")
	private int DeptNo;
	public Employee() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Employee(int empNo, String ename, String job, String hireDate, int managerId, int salary, float commission,
			int deptNo) {
		super();
		this.EmpNo = empNo;
		this.Ename = ename;
		this.job = job;
		this.HireDate = hireDate;
		this.ManagerId = managerId;
		this.Salary = salary;
		this.Commission = commission;
		this.DeptNo = deptNo;
	}

	public int getEmpNo() {
		return EmpNo;
	}
	public void setEmpNo(int empNo) {
		EmpNo = empNo;
	}
	public String getEname() {
		return Ename;
	}
	public void setEname(String ename) {
		Ename = ename;
	}
	public String getJob() {
		return job;
	}
	public void setJob(String job) {
		this.job = job;
	}
	public String getHireDate() {
		return HireDate;
	}
	public void setHireDate(String hireDate) {
		HireDate = hireDate;
	}
	public int getManagerId() {
		return ManagerId;
	}
	public void setManagerId(int managerId) {
		ManagerId = managerId;
	}
	public int getSalary() {
		return Salary;
	}
	public void setSalary(int salary) {
		Salary = salary;
	}
	public float getCommission() {
		return Commission;
	}
	public void setCommission(float commission) {
		Commission = commission;
	}
	public int getDeptNo() {
		return DeptNo;
	}
	public void setDeptNo(int deptNo) {
		DeptNo = deptNo;
	}
	@Override
	public String toString() {
		return "Employee [EmpNo=" + EmpNo + ", Ename=" + Ename + ", job=" + job + ", HireDate=" + HireDate
				+ ", ManagerId=" + ManagerId + ", Salary=" + Salary + ", Commission=" + Commission + ", DeptNo="
				+ DeptNo + "]";
	}
	
	

}
