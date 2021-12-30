package com.Booking.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Booking.flight.BookingFlight;
import com.Booking.repo.BookingRepo;

@Service
public class BookingService {
	@Autowired
	BookingRepo repo;

	//Add flight data
		public String save(BookingFlight f1) {
			
			repo.save(f1);	
			return ("Flight Added with ID: "+ f1.getId());
		}
		
		public List<BookingFlight> getflight(){
			return repo.findAll();
		}
		
}
