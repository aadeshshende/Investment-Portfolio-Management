package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.dto.TradeHistoryDto;
import com.app.entities.Order;
import com.app.entities.TradeHistory;

public interface TradeHistoryService {

	List<TradeHistory> getAllTradeHistories();

	Optional<TradeHistory> getTradeHistoryById(Long id);

	TradeHistory saveTradeHistory(TradeHistory tradeHistory);

	void deleteTradeHistory(Long id);

	void createTradeHistory(Order order);
	
	List<TradeHistoryDto> getTradeHistoryByUserId(Long userId);

}
