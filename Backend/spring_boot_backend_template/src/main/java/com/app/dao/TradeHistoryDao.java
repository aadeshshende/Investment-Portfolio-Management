package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.TradeHistory;

public interface TradeHistoryDao  extends JpaRepository<TradeHistory, Long>{

	List<TradeHistory> findByUserId(Long userId);
}
