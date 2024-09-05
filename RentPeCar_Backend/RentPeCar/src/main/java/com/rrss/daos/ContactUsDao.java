package com.rrss.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rrss.entities.Car;
import com.rrss.entities.ContactUs;

public interface ContactUsDao extends JpaRepository<ContactUs, Integer> {

}
