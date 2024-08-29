package com.app.service;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;

import com.app.dao.StockDao;
import com.app.dao.UserDao;
import com.app.dto.AddStockRequestDTO;
import com.app.dto.StockResDto;
import com.app.dto.WatchlistDTO;
import com.app.entities.Watchlist;

public interface WatchlistService {
	
	
	public void saveStock(AddStockRequestDTO request);
	List<WatchlistDTO> getUserWatchlist(String email, String password);
	void deleteStockFromWatchlist(String email, String password, Long watchlistId, Long stockId);
	
}
