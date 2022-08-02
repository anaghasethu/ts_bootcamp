package com.example.demo.entity;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "product")
public class Product {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Integer id;
	@Column(name = "sku")
	private String sku;
	@Column(name = "name")
	private String name;
	@Column(name = "description")
	private String description;
	@Column(name = "unitprice")
	private float unitprice;
	@Column(name = "imageurl")
	private String imageurl;
	@Column(name = "active")
	private boolean active;
	@Column(name = "unitsinstock")
	private int unitsinstock;
	@Column(name = "datecreated")
	private Date datecreated;
	@Column(name = "lastupdated")
	private Date lastupdated;
	@Column(name = "categoryid")
	private int categoryid;
	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Product(String sku, String name, String description, float unitprice, String imageurl,
			boolean active, int unitsinstock, Date datecreated, Date lastupdated, int categoryid) {
		super();
		this.sku = sku;
		this.name = name;
		this.description = description;
		this.unitprice = unitprice;
		this.imageurl = imageurl;
		this.active = active;
		this.unitsinstock = unitsinstock;
		this.datecreated = datecreated;
		this.lastupdated = lastupdated;
		this.categoryid = categoryid;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getSku() {
		return sku;
	}
	public void setSku(String sku) {
		this.sku = sku;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public float getUnitprice() {
		return unitprice;
	}
	public void setUnitprice(float unitprice) {
		this.unitprice = unitprice;
	}
	public String getImageurl() {
		return imageurl;
	}
	public void setImageurl(String imageurl) {
		this.imageurl = imageurl;
	}
	public boolean isActive() {
		return active;
	}
	public void setActive(boolean active) {
		this.active = active;
	}
	public int getUnitsinstock() {
		return unitsinstock;
	}
	public void setUnitsinstock(int unitsinstock) {
		this.unitsinstock = unitsinstock;
	}
	public Date getDatecreated() {
		return datecreated;
	}
	public void setDatecreated(Date datecreated) {
		this.datecreated = datecreated;
	}
	public Date getLastupdated() {
		return lastupdated;
	}
	public void setLastupdated(Date lastupdated) {
		this.lastupdated = lastupdated;
	}
	public int getCategoryid() {
		return categoryid;
	}
	public void setCategoryid(int categoryid) {
		this.categoryid = categoryid;
	}
	@Override
	public String toString() {
		return "Product [id=" + id + ", sku=" + sku + ", name=" + name + ", description=" + description + ", unitprice="
				+ unitprice + ", imageurl=" + imageurl + ", active=" + active + ", unitsinstock=" + unitsinstock
				+ ", datecreated=" + datecreated + ", lastupdated=" + lastupdated + ", categoryid=" + categoryid + "]";
	}
}