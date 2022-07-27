package com.dependencyinjection.annotation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Vehicle {
	@Autowired
	Movable move;

	public Vehicle() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Vehicle(Movable move) {
		super();
		this.move = move;
	}

	public Movable getMove() {
		return move;
	}

	public void setMove(Movable move) {
		this.move = move;
	}
	
	public void moveVehicle() {
		move.move_left();
		move.move_right();
	}


}
