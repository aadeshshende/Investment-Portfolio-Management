package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import com.app.dto.SigninResponse;
import com.app.entities.User;
import com.app.entities.UserRole;
import com.app.security.JwtUtils;
import com.app.service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UserService userService;
    
    @Autowired
	private JwtUtils jwtUtils;
	
	@Autowired
	private AuthenticationManager authMgr;

    public UserController() {
        System.out.println("in def ctor of " + getClass());
    }

    @PostMapping("/send-otp")
    public String sendOtp(@RequestBody User user) {
        // Step 1: Generate and send OTP, store user data temporarily
    	user.setRole(UserRole.ROLE_CUSTOMER);
    	System.out.println(user);
        boolean isOtpSent = userService.sendOtpForRegistration(user);
        if (isOtpSent) {
            return "OTP sent to " + user.getEmail();
        } else {
            return "Failed to send OTP.";
        }
    }

    @PostMapping("/validate-otp")
    public String validateOtp(@RequestParam String email, @RequestParam String otp) {
        // Step 2: Validate OTP and register user
        boolean isRegistered = userService.validateOtpAndRegisterUser(email, otp);
        if (isRegistered) {
            return "User registered successfully.";
        } else {
            return "Invalid OTP or registration failed.";
        }
    }

    @PostMapping("/login")
    public ResponseEntity<SigninResponse> login(@RequestParam String email, @RequestParam String password) {
    	//create a token(implementation of Authentication i/f)
    			//to store un verified user email n pwd
    			UsernamePasswordAuthenticationToken token=new 
    					UsernamePasswordAuthenticationToken(email, 
    							password);
    			//invoke auth mgr's authenticate method;
    			Authentication verifiedToken = authMgr.authenticate(token);
    			//=> authentication n authorization  successful !
    			System.out.println(verifiedToken.getPrincipal().getClass());//custom user details object
    			//create JWT n send it to the clnt in response
    			SigninResponse resp=new SigninResponse
    					(jwtUtils.generateJwtToken(verifiedToken),
    					"Successful Auth!!!!");
    			return ResponseEntity.
    					status(HttpStatus.CREATED).body(resp);
    }
    
    @GetMapping("/userIdByEmail")
    public ResponseEntity<Long> getUserIdByEmail(@RequestParam String email) {
        try {
            Long userId = userService.findUserIdByEmail(email);
            return ResponseEntity.ok(userId);
        } catch (Exception e) {
            return ResponseEntity.status(404).body(null);
        }
    }
}
