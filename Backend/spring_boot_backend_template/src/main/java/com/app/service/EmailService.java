package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;
import java.util.HashMap;
import java.util.Map;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    private final SecureRandom secureRandom = new SecureRandom();
    private Map<String, String> otpStorage = new HashMap<>();

    public String generateOtp() {
        int otp = 100000 + secureRandom.nextInt(900000); // 6 digit OTP
        return String.valueOf(otp);
    }

    public void sendOtpEmail(String toEmail, String otp) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(toEmail);
        message.setSubject("Your Registration OTP");
        message.setText("Thank you for registering with InvestLine!\r\n"
        		+ "\r\n"
        		+ "To complete your registration, please use the One-Time Password (OTP) provided below: " + "\r\n" + "Your OTP:" + otp);
        mailSender.send(message);
    }

    public void storeOtp(String email, String otp) {
        otpStorage.put(email, otp);
    }

    public boolean validateOtp(String email, String otp) {
        String storedOtp = otpStorage.get(email);
        if (storedOtp != null && storedOtp.equals(otp)) {
            otpStorage.remove(email); // Remove OTP after successful validation
            return true;
        }
        otpStorage.remove(email);
        return false;
    }
}
