package com.app.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.app.dto.AddStockRequestDTO;
import com.app.dto.WatchlistDTO;
import com.app.service.WatchlistService;

@RestController
@RequestMapping("/watchlist")
@CrossOrigin(origins = "http://localhost:3000")
public class WatchlistController {

    @Autowired
    private WatchlistService watchlistService;

    @PostMapping("/add")
    public ResponseEntity<String> addStockToWatchlist(@RequestBody AddStockRequestDTO request) {
        watchlistService.saveStock(request);
        return ResponseEntity.ok("Stock added to watchlist");
    }

    @GetMapping("/{email}")
    public ResponseEntity<List<WatchlistDTO>> getUserWatchlist(@PathVariable String email, @RequestParam String password) {
        List<WatchlistDTO> watchlist = watchlistService.getUserWatchlist(email, password);
        return ResponseEntity.ok(watchlist);
    }
    
    
}
