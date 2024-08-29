package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.PortfolioDao;
import com.app.dto.PortfolioDto;
import com.app.entities.Portfolio;
import com.app.entities.Stock;
import com.app.entities.User;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class PortfolioServiceImpl implements PortfolioService {

    @Autowired
    private PortfolioDao portfolioDao;

    @Override
    public void addStockToPortfolio(User user, Stock stock, int quantity, double purchasePrice) {
        Optional<Portfolio> existingPortfolio = portfolioDao.findByUserAndStock(user, stock);

        if (existingPortfolio.isPresent()) {
            Portfolio portfolio = existingPortfolio.get();
            int newQuantity = portfolio.getQuantity() + quantity;
            double newAveragePrice = (portfolio.getAveragePurchasePrice() * portfolio.getQuantity() + purchasePrice * quantity) / newQuantity;
            portfolio.setQuantity(newQuantity);
            portfolio.setAveragePurchasePrice(newAveragePrice);
            portfolioDao.save(portfolio);
        } else {
            Portfolio portfolio = new Portfolio();
            portfolio.setUser(user);
            portfolio.setStock(stock);
            portfolio.setQuantity(quantity);
            portfolio.setAveragePurchasePrice(purchasePrice);
            portfolioDao.save(portfolio);
        }
    }

    @Override
    public void removeStockFromPortfolio(User user, Stock stock, int quantity) {
        Optional<Portfolio> existingPortfolio = portfolioDao.findByUserAndStock(user, stock);

        if (existingPortfolio.isPresent()) {
            Portfolio portfolio = existingPortfolio.get();
            int newQuantity = portfolio.getQuantity() - quantity;

            if (newQuantity >= 0) {
                portfolio.setQuantity(newQuantity);
                portfolioDao.save(portfolio);
            } else {
                portfolioDao.delete(portfolio);
            }
        }
    }

    
    @Override
    public List<PortfolioDto> getPortfoliosByUserId(Long userId) {
        List<Portfolio> portfolios = portfolioDao.findByUserId(userId);
        List<PortfolioDto> portfolioDtos = new ArrayList<>();
        
        for (Portfolio portfolio : portfolios) {
            PortfolioDto dto = new PortfolioDto();
            dto.setId(portfolio.getId());
            dto.setStockName(portfolio.getStock().getCompanyName()); // Assuming the stock name is stored in `companyName`
            dto.setQuantity(portfolio.getQuantity());
            dto.setAveragePurchasePrice(portfolio.getAveragePurchasePrice());
            portfolioDtos.add(dto);
        }

        return portfolioDtos;
    }
    
    
    
    @Override
    public List<Portfolio> getAllPortfolios() {
        return portfolioDao.findAll();
    }

    @Override
    public Optional<Portfolio> getPortfolioById(Long id) {
        return portfolioDao.findById(id);
    }

    @Override
    public Portfolio savePortfolio(Portfolio portfolio) {
        return portfolioDao.save(portfolio);
    }

    @Override
    public void deletePortfolio(Long id) {
        portfolioDao.deleteById(id);
    }
}
