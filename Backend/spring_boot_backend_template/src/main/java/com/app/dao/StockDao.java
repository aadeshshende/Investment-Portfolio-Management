package com.app.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;


import com.app.entities.Stock;

public interface StockDao extends JpaRepository<Stock, Long> {
	Optional<Stock> findByInstrumentKey(String instrumentKey);
	
}
