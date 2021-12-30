package com.flight.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.flight.entity.flight;
import com.flight.repository.FlightDuo;
@Service
public class FlightService {
	@Autowired
	FlightDuo duo;
	
/* FromToDetails fromToDetails; */
	
	//Mapping values from flight collection in database
	
	public  List<flight> getAllflightDetails(String dep1,String des1,String date) {
		
		List<flight> flights = new ArrayList<flight>();
		List<flight> Match = new ArrayList<flight>();
		
		duo.findAll().forEach(e1 -> flights.add(e1)); 
		
		
		  for(flight f: flights) {
		  if(f.getFrom().equals(dep1) && f.getTo().equals(des1) && f.getDate().equals(date))
		  { 
			  Match.add(f);
		  
		  }
		  }
		  System.out.println(Match);
			return Match;
			
			 
		}
	
		 
	
	//Add flight data
		public String save(flight f1) {
			
			duo.save(f1);	
			return ("Flight Added with ID: "+ f1.getId());
		}
		//delete flight
		public String deleteflightDetails(String id) {
			duo.deleteById(id);
			return ("Deleted flight id "+id);
			
		}
		public List<flight> getAllflight(){
			return duo.findAll();
		}
		
	
}
