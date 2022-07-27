package com.dependencyinjection.annotation;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
       ApplicationContext context = new AnnotationConfigApplicationContext(Configuration.class);
//       context.getBean(Car.class).move_left();
//       context.getBean(Car.class).move_right();
       
       Vehicle v = context.getBean(Vehicle.class);
       v.moveVehicle();
       
       v.setMove(context.getBean(Truck.class));
       v.moveVehicle();
       
    }
}
