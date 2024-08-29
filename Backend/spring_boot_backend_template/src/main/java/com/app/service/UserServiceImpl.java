package com.app.service;

import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.UserDao;
import com.app.entities.User;

import java.util.HashMap;
import java.util.Map;

@Service
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDao userDao;

	@Autowired
	private EmailService emailService;

	@Autowired
	private PasswordEncoder passwordEncoder;

	private Map<String, User> tempUserStorage = new HashMap<>();

	@Override
	public boolean sendOtpForRegistration(User user) {
		// Generate OTP
		String otp = emailService.generateOtp();

		// Send OTP to the user's email
		emailService.sendOtpEmail(user.getEmail(), otp);

		// Store the user data temporarily with OTP as the key
		tempUserStorage.put(user.getEmail(), user);
		emailService.storeOtp(user.getEmail(), otp);

		return true;
	}

	@Override
	public boolean validateOtpAndRegisterUser(String email, String otp) {
		// Validate the OTP
		if (emailService.validateOtp(email, otp)) {
			// If valid, register the user
			User user = tempUserStorage.get(email);
			if (user != null) {
				user.setPassword(passwordEncoder.encode(user.getPassword()));
				userDao.save(user);
				tempUserStorage.remove(email); // Clear temp storage after registration
				return true;
			}
		}
		// tempUserStorage.remove(email);
		return false;
	}

	@Override
	public boolean loginUser(String email, String password) {
		User user = userDao.findByEmailAndPassword(email, password);
		return user != null;
	}

	public User findById(Long id) {
		return userDao.findById(id).orElseThrow(() -> new ResourceNotFoundException("User not found with id " + id));
	}

	@Override
	public Long findUserIdByEmail(String email) {
		User user = userDao.findByEmail(email)
				.orElseThrow(() -> new ResourceNotFoundException("User not found with email " + email));
		return user.getId();

	}
}
