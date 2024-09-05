package com.rrss.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rrss.daos.ContactUsDao;
import com.rrss.entities.ContactUs;

@Service
public class ContactUsServiceImpl {

	@Autowired
	ContactUsDao contactUsDao;
	
	public ContactUs save(ContactUs contactUs) {
		return contactUsDao.save(contactUs);
	}
	
	public List<ContactUs> get() {
		return contactUsDao.findAll();
	}
}
