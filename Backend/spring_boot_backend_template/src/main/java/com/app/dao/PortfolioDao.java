package com.app.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Portfolio;
import com.app.entities.Stock;
import com.app.entities.User;

public interface PortfolioDao extends JpaRepository<Portfolio, Long>{

	Optional<Portfolio> findByUserAndStock(User user, Stock stock);
	  List<Portfolio> findByUserId(Long userId);
}
