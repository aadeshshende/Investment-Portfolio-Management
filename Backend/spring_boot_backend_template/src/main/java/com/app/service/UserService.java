package com.app.service;

import com.app.entities.User;

public interface UserService {

	
	boolean loginUser(String email, String password);
	
	User findById(Long id);

	boolean validateOtpAndRegisterUser(String email, String otp);

	boolean sendOtpForRegistration(User user);

	Long findUserIdByEmail(String email);
	
	
}
