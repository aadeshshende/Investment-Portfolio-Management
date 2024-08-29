package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.app.dto.PortfolioDto;
import com.app.entities.Portfolio;
import com.app.service.PortfolioService;

import java.util.List;

@RestController
@RequestMapping("/api/portfolios")
@CrossOrigin(origins = "http://localhost:3000")
public class PortfolioController {

    @Autowired
    private PortfolioService portfolioService;

    @GetMapping
    public List<Portfolio> getAllPortfolios() {
        return portfolioService.getAllPortfolios();
    }

    @GetMapping("/portfolios/{userId}")
    public ResponseEntity<List<PortfolioDto>> getPortfoliosByUserId(@PathVariable Long userId) {
        List<PortfolioDto> portfolios = portfolioService.getPortfoliosByUserId(userId);
        return ResponseEntity.ok(portfolios);
    }
    
    
    
    
    @GetMapping("/{id}")
    public ResponseEntity<Portfolio> getPortfolioById(@PathVariable Long id) {
        return portfolioService.getPortfolioById(id)
                .map(portfolio -> ResponseEntity.ok().body(portfolio))
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Portfolio createPortfolio(@RequestBody Portfolio portfolio) {
        return portfolioService.savePortfolio(portfolio);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Portfolio> updatePortfolio(@PathVariable Long id, @RequestBody Portfolio portfolioDetails) {
        return portfolioService.getPortfolioById(id)
                .map(portfolio -> {
                    portfolio.setQuantity(portfolioDetails.getQuantity());
                    portfolio.setAveragePurchasePrice(portfolioDetails.getAveragePurchasePrice());
                    Portfolio updatedPortfolio = portfolioService.savePortfolio(portfolio);
                    return ResponseEntity.ok().body(updatedPortfolio);
                }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deletePortfolio(@PathVariable Long id) {
        return portfolioService.getPortfolioById(id)
                .map(portfolio -> {
                    portfolioService.deletePortfolio(id);
                    return ResponseEntity.ok().build();
                }).orElse(ResponseEntity.notFound().build());
    }
}

