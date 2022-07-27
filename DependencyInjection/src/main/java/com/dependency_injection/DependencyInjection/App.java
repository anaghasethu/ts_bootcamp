package com.dependency_injection.DependencyInjection;

import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
//    	
//        Car c = new Car();
//        c.move_left();
//        c.move_right();
    	
    	ConfigurableApplicationContext app = new ClassPathXmlApplicationContext("Config.xml");
//    	Car c = (Car)app.getBean("car_obj");
//    	c.move_right();
//    	c.move_left();
    	
    	Vehicle v = (Vehicle)app.getBean("vehicle");
    	v.moveVehicle();
    }
}
