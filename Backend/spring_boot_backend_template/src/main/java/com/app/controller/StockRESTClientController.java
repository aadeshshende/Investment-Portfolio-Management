package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.StockInfoListDTO;
import com.app.dto.StockSearchResultDTO;
import com.app.service.StockRESTClientService;

@RestController
@RequestMapping("/search_Stock")
@CrossOrigin(origins = "http://localhost:3000")
public class StockRESTClientController {

	@Autowired
	private StockRESTClientService StockRestClientService;

	@GetMapping("/{keyword}")
	public ResponseEntity<?> getData(@PathVariable String keyword) {
		System.out.println("in get data");
		StockInfoListDTO result = StockRestClientService.getData(keyword);
	    return ResponseEntity.ok(result);
	}
	
}
