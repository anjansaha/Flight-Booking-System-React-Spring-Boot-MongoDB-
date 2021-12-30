package com.anjan.FlightUser.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.anjan.FlightUser.Repositry.UserRepositry;
import com.anjan.FlightUser.model.User;
@CrossOrigin(origins="http://localhost:3000")
@RestController

public class UserController {
	
	@Autowired
	UserRepositry repo;
	
	@PostMapping("/saveUser")
	public void saveUser(@RequestBody User user) {
		repo.save(user);
	}
	
	@GetMapping("/getAllUser")
	public List<User> getAllUser() {
		return repo.findAll();
	}
	
	
}
