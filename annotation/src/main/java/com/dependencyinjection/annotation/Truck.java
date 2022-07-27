package com.dependencyinjection.annotation;

import org.springframework.stereotype.Component;

@Component
public class Truck implements Movable {
	
	public void move_right() {
		// TODO Auto-generated method stub
		System.out.println("Truck moving towards right...");
		
	}

	public void move_left() {
		// TODO Auto-generated method stub
		System.out.println("Truck moving towards left...");
		
	}

}
