package com.rrss.services;

import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpSession;

import com.rrss.entities.User;
import com.rrss.models.Email;

public interface UserService {
	User findByEmail(String email);

	User authenticate(String email, String password);

	List<User> findByRole(String role);

	List<User> findAll();

	User saveUser(User e);

	User updateUser(User e);

	User findUserById(int id);

	void deleteUser(User emp);

	User changePassword(String email);

	Optional<User> findByResetToken(String resetToken);

	void resetpassword(User user, String password);

	void sendOtp(User user, HttpSession session);


	void storeOTP(String email, int otp);

	void verifyOtp(Email dto)throws Exception;

}
