package com.flight.contoller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.flight.entity.flight;
import com.flight.service.FlightService;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class AdminFlightController {
	 @Autowired
	 FlightService Service;
	 
	 //Add new flight details
	 
	  @PostMapping("/addflight") 
	  public String saveflightDetails(@RequestBody flight e) 
	  { 
		  return Service.save(e);
		  
	  }
	  
	  //delete flight
	  @DeleteMapping("/deleteflight/{id}")
		private String deleteflightDetails(@PathVariable String id) {
			return Service.deleteflightDetails(id);
		
		}
	  
	  @GetMapping("/allFlight")
		private List<flight> getflight() {
			return Service.getAllflight();
		}
	  
}
