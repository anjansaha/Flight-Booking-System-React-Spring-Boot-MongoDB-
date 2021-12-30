package com.flight.contoller;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.flight.entity.flight;
import com.flight.service.FlightService;
@CrossOrigin(origins="http://localhost:3000")
@RestController
public class FlightContoller {
	
	@Autowired
	FlightService Service;
	//User entering departure , destination ,date
		 @GetMapping("flights/from={dep1}&to={des1}&date={date}") 
		 public List<flight> getAllflightDetails(@PathVariable String dep1,@PathVariable String des1,@PathVariable String date) {
			 
			return Service.getAllflightDetails(dep1, des1, date);
		}
		
		 
	
}
