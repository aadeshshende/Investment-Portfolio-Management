package com.app.controller;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ApiResponse;
import com.app.entities.Stock;
import com.app.service.StockService;

import io.swagger.v3.oas.annotations.Operation;

@RestController
@RequestMapping(value = "/stocks", produces = "application/json")
@CrossOrigin(origins = "http://localhost:3000")
public class StockController {

	@Autowired
	private StockService stockService;

	@PostMapping("/addstocks")
	public ResponseEntity<?> addNewStock(@RequestBody @Valid Stock stock) {
		try {
			System.out.println(stock);
			return ResponseEntity.status(HttpStatus.CREATED).body(stockService.addStock(stock));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}

	@GetMapping("/getStockId/{instrumentKey}")
    @Operation(summary = "Get Stock ID by Instrument Key")
    public ResponseEntity<?> getStockIdByInstrumentKey(@PathVariable String instrumentKey) {
        try {
            Long stockId = stockService.getStockIdByInstrumentKey(instrumentKey);
            return ResponseEntity.status(HttpStatus.OK).body(stockId);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }
	
	

	@GetMapping("/get")
	public ResponseEntity<?> getStockDetails() {
		try {
			return ResponseEntity.status(HttpStatus.OK).body(stockService.getStocks());
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteStock(@PathVariable Long id) {
		System.out.println("in delete " + id);
		try {
			return ResponseEntity.ok(new ApiResponse(stockService.deleteStockById(id)));
		} catch (RuntimeException e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse(e.getMessage()));
		}

	}

	@GetMapping("/search/{keyword}")
	public ResponseEntity<?> searchStock(@PathVariable String keyword) {
		try {
			return ResponseEntity.status(HttpStatus.OK).body(stockService.searchStocks(keyword));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}

	}

}
