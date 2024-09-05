package com.rrss.models;

public class ContactUsDTO {
	private String fname;
	private String lname;
	private String email;
	private String message;
	
	
	
	public ContactUsDTO() {
		super();
	}
	public ContactUsDTO(String fname, String lname, String email, String message) {
		super();
		this.fname = fname;
		this.lname = lname;
		this.email = email;
		this.message = message;
	}
	public String getFanme() {
		return fname;
	}
	public void setFanme(String fname) {
		this.fname = fname;
	}
	public String getLname() {
		return lname;
	}
	public void setLname(String lname) {
		this.lname = lname;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	
	
	

}
