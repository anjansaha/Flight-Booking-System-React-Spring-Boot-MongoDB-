package com.Booking.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.Booking.flight.BookingFlight;
import com.Booking.service.BookingService;
@CrossOrigin(origins="http://localhost:3000")
@RestController
public class BookingController {
	@Autowired
	BookingService service;
	
	@PostMapping("/saveFilght/{id}")
	public String saveFlight(@RequestBody BookingFlight id) {
	 service.save(id);
	 return "done";
	 
		
	}
	@GetMapping("/getFlight")
	public List<BookingFlight> GetFlight(){
		return service.getflight();
	}
}
