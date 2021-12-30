package com.anjan.FlightUser.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;



@Document("user_details")
public class User  {
	
	@Id
	private String email;
	private String name;
	private String password;
	private String phnumber;
	public User(String email, String name, String password, String phnumber) {
		super();
		this.email = email;
		this.name = name;
		this.password = password;
		this.phnumber = phnumber;
	}
	public User() {
		super();
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getPhnumber() {
		return phnumber;
	}
	public void setPhnumber(String phnumber) {
		this.phnumber = phnumber;
	}
	@Override
	public String toString() {
		return "User [email=" + email + ", name=" + name + ", password=" + password + ", phnumber=" + phnumber + "]";
	}
	
	
	
	

}
