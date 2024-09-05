package com.rrss.services;

import com.rrss.entities.Payment;
import com.rrss.models.BookingPayment;

public interface IPaymentService {
	Payment savePaymentDetails(BookingPayment payment) throws Exception;
	String updatePaymentDetails(BookingPayment payment) throws Exception;

}
