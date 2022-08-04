				create database ecom;	
                use ecom; 
                
                create table productcategory(categoryid int primary key,
                categoryname varchar(255));
                select * from productcategory;
				select * from product;
                drop table product;
                insert into productcategory values (1201, "Fashion"),(1202,"Electronics");
                truncate product;
                insert into product
                (sku,name,description,unitprice,imageurl,unitsinstock,datecreated,lastupdated,categoryid) 
                values 
                ("AK1200101","Mouse","RS PRO Mouse 75mm x 35mm",8233.30,
                "https://th.bing.com/th?id=OPA.S5LWrEPLnK%2fCrg474C474&w=168&h=150&dpr=1.5&pid=21.1"
                ,44,now(),now(),1202); 
              
              truncate product;
                truncate product;
                create table product(
                id int primary key auto_increment,
                sku varchar(255),
                name varchar(255),
                description varchar(255),
                unitprice float,
                imageurl varchar(255),
                unitsinstock int,
                datecreated datetime(6),
                lastupdated datetime(6),
                categoryid int,
                foreign key(categoryid) references productcategory(categoryid)
                );
                drop table cart;
                create table cart(
                id int primary key,
                sku varchar(255),
                name varchar(255),
                description varchar(255),
                unitprice float,
                imageurl varchar(255),
                active bit(1),
                unitsinstock int,
                datecreated datetime(6),
                lastupdated datetime(6),
                categoryid int,
                foreign key(categoryid) references productcategory(categoryid));