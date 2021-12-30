package com.flight.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.flight.entity.flight;



public interface FlightDuo extends MongoRepository<flight, String>  {


}
