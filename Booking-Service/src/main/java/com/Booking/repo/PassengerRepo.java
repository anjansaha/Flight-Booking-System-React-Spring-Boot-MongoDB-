package com.Booking.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.Booking.passenger.Passenger;

public interface PassengerRepo extends MongoRepository<Passenger, String> {

}
