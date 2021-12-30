package com.Booking.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.Booking.passenger.Passenger;
import com.Booking.service.PassengerService;
@CrossOrigin(origins="http://localhost:3000")
@RestController
public class PassengerController {
	@Autowired
	PassengerService service;
	
	@PostMapping("/savePassenger")
	public void savePassenger(@RequestBody Passenger p1) {
		 service.save(p1);
		 }
}
