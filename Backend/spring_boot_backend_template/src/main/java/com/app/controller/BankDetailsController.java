package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ApiResponse;
import com.app.dto.BankDetailsDTO;
import com.app.service.BankDetailsService;

@RestController
@RequestMapping("/bankdetails")
@CrossOrigin(origins = "http://localhost:3000")
public class BankDetailsController {

    @Autowired
    private BankDetailsService bankDetailsService;

    public BankDetailsController() {
        System.out.println("in def ctor of " + getClass());
    }

    @PostMapping("/addBankDetails")
    public ResponseEntity<?> addBankDetails(@RequestBody BankDetailsDTO dto) {
        System.out.println("in add bank details " + dto);
        try {
            BankDetailsDTO responseDTO = bankDetailsService.addBankDetails(dto);
            return ResponseEntity.status(HttpStatus.CREATED).body(responseDTO);
        } catch (RuntimeException e) {
            System.out.println(e);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse(e.getMessage()));
        }
    }
}
