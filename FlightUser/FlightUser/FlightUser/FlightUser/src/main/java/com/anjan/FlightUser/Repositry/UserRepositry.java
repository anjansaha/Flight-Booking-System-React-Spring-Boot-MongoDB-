package com.anjan.FlightUser.Repositry;


import org.springframework.data.mongodb.repository.MongoRepository;

import com.anjan.FlightUser.model.User;

public interface UserRepositry extends MongoRepository<User, String>{

}
