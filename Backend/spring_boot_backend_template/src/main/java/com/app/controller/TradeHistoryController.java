package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.app.dto.TradeHistoryDto;
import com.app.entities.TradeHistory;
import com.app.service.TradeHistoryService;

import java.util.List;

@RestController
@RequestMapping("/api/tradeHistories")
@CrossOrigin(origins = "http://localhost:3000")
public class TradeHistoryController {

    @Autowired
    private TradeHistoryService tradeHistoryService;

    @GetMapping
    public List<TradeHistory> getAllTradeHistories() {
        return tradeHistoryService.getAllTradeHistories();
    }


    @GetMapping("/user/{userId}")
    public ResponseEntity<List<TradeHistoryDto>> getTradeHistoryByUser(@PathVariable Long userId) {
        List<TradeHistoryDto> tradeHistory = tradeHistoryService.getTradeHistoryByUserId(userId);
        if (tradeHistory != null) {
            return ResponseEntity.ok(tradeHistory);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    
    @GetMapping("/{id}")
    public ResponseEntity<TradeHistory> getTradeHistoryById(@PathVariable Long id) {
        return tradeHistoryService.getTradeHistoryById(id)
                .map(tradeHistory -> ResponseEntity.ok().body(tradeHistory))
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public TradeHistory createTradeHistory(@RequestBody TradeHistory tradeHistory) {
        return tradeHistoryService.saveTradeHistory(tradeHistory);
    }

    @PutMapping("/{id}")
    public ResponseEntity<TradeHistory> updateTradeHistory(@PathVariable Long id, @RequestBody TradeHistory tradeHistoryDetails) {
        return tradeHistoryService.getTradeHistoryById(id)
                .map(tradeHistory -> {
                    tradeHistory.setTransactionType(tradeHistoryDetails.getTransactionType());
                    tradeHistory.setQuantity(tradeHistoryDetails.getQuantity());
                    tradeHistory.setPriceAtTransaction(tradeHistoryDetails.getPriceAtTransaction());
                    tradeHistory.setTradeDate(tradeHistoryDetails.getTradeDate());
                    TradeHistory updatedTradeHistory = tradeHistoryService.saveTradeHistory(tradeHistory);
                    return ResponseEntity.ok().body(updatedTradeHistory);
                }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteTradeHistory(@PathVariable Long id) {
        return tradeHistoryService.getTradeHistoryById(id)
                .map(tradeHistory -> {
                    tradeHistoryService.deleteTradeHistory(id);
                    return ResponseEntity.ok().build();
                }).orElse(ResponseEntity.notFound().build());
    }
}
