package com.rrss.controllers;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rrss.entities.Car;
import com.rrss.entities.ContactUs;
import com.rrss.models.CarInDto;
import com.rrss.models.ContactUsDTO;
import com.rrss.models.Response;
import com.rrss.services.ContactUsServiceImpl;

@RequestMapping("/contactus")
@RestController
@CrossOrigin
public class ContactUsController {
	
	@Autowired
	ContactUsServiceImpl contactUsService;
		
	@PostMapping("/")
	public ResponseEntity<?> save(ContactUs contactUs) {
		//ContactUs contact = new ContactUs();
		//BeanUtils.copyProperties(contactUs, contact);
		ContactUs newContact = contactUsService.save(contactUs);
		return Response.success(newContact);
	}
	
	@GetMapping("/")
	public ResponseEntity<?> getContactUs() {
		List<ContactUs> list = contactUsService.get();
		return Response.success(list);
	}
}
