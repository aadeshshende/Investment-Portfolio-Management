package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.dto.PortfolioDto;
import com.app.entities.Portfolio;
import com.app.entities.Stock;
import com.app.entities.User;

public interface PortfolioService {

	List<Portfolio> getAllPortfolios();

	Optional<Portfolio> getPortfolioById(Long id);

	Portfolio savePortfolio(Portfolio portfolio);

	void deletePortfolio(Long id);

	void addStockToPortfolio(User user, Stock stock, int quantity, double purchasePrice);

	void removeStockFromPortfolio(User user, Stock stock, int quantity);

	List<PortfolioDto> getPortfoliosByUserId(Long userId);

}
