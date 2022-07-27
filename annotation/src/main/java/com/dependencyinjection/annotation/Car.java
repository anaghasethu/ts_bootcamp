package com.dependencyinjection.annotation;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

@Component
@Primary
public class Car implements Movable {

	public void move_right() {
		// TODO Auto-generated method stub
		System.out.println("Car moving towards right...");
		
	}

	public void move_left() {
		// TODO Auto-generated method stub
		System.out.println("Car moving towards left...");
		
	}
}
