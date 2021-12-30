package com.Booking.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Booking.passenger.Passenger;
import com.Booking.repo.PassengerRepo;

@Service
public class PassengerService {
	@Autowired
	PassengerRepo repo;
	//Add flight data
			public String save(Passenger p1) {
				
				repo.save(p1);	
				return ("Flight Added with ID: "+ p1.getId());
			}
}
