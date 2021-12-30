package com.Booking.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.Booking.flight.BookingFlight;


public interface BookingRepo  extends MongoRepository<BookingFlight, String> {

}
