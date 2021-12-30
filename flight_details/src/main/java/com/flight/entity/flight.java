package com.flight.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("flight_details")
public class flight {
	@Id
	private String id;
	private String from;
	private String to;
	private String date;
	private String time;
	private String flight;
	private String fare;
	private String duration;
	public flight(String id, String from, String to, String date, String time, String flight, String fare,
			String duration) {
		super();
		this.id = id;
		this.from = from;
		this.to = to;
		this.date = date;
		this.time = time;
		this.flight = flight;
		this.fare = fare;
		this.duration = duration;
	}
	public flight() {
		super();
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getFrom() {
		return from;
	}
	public void setFrom(String from) {
		this.from = from;
	}
	public String getTo() {
		return to;
	}
	public void setTo(String to) {
		this.to = to;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public String getFlight() {
		return flight;
	}
	public void setFlight(String flight) {
		this.flight = flight;
	}
	public String getFare() {
		return fare;
	}
	public void setFare(String fare) {
		this.fare = fare;
	}
	public String getDuration() {
		return duration;
	}
	public void setDuration(String duration) {
		this.duration = duration;
	}
	@Override
	public String toString() {
		return "flight [id=" + id + ", from=" + from + ", to=" + to + ", date=" + date + ", time=" + time + ", flight="
				+ flight + ", fare=" + fare + ", duration=" + duration + "]";
	}
	

}
