package com.app.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.StockDao;
import com.app.dao.UserDao;
import com.app.dao.WatchlistDao;
import com.app.dto.AddStockRequestDTO;
import com.app.dto.StockDTO;
import com.app.dto.StockResDto;
import com.app.dto.WatchlistDTO;
import com.app.entities.Stock;
import com.app.entities.User;
import com.app.entities.Watchlist;
@Service
@Transactional
public class WatchlistServiceImpl implements WatchlistService{
	
	@Autowired
	private UserDao userDao;
	
	@Autowired
	private StockDao stockDao;
	
	@Autowired
	private WatchlistDao watchlistDao;
	
	@Autowired
	private ModelMapper modelMapper;

	@Override
	public void saveStock(AddStockRequestDTO request) {
		
		
		 User user = userDao.findByEmailAndPassword(request.getEmail(), request.getPassword());
		    if (user == null) {
		        throw new RuntimeException("User not found or invalid credentials");
		    }

		    Stock stock = stockDao.findById(request.getStockId())
		            .orElseThrow(() -> new RuntimeException("Stock not found"));

		    Watchlist watchlist = new Watchlist();
		    watchlist.setUser(user); // Make sure this user is managed by the persistence context
		    watchlist.setStocks(List.of(stock));
		    watchlist.setWName(request.getWatchlistName());

		    // Optional: add watchlist to user's watchlists collection if it's bidirectional
		    // user.getWatchlists().add(watchlist);

		    watchlistDao.save(watchlist); // This should 
	}
	
	@Override
	public List<WatchlistDTO> getUserWatchlist(String email, String password) {
	    // Find the user by email and password, or throw an exception if not found
	    User user = userDao.findByEmailAndPassword(email, password);
	            

	    // Fetch the watchlists associated with the user
	    List<Watchlist> watchlists = watchlistDao.findByUser(user);

	    // Initialize the list to hold WatchlistDTOs
	    List<WatchlistDTO> watchlistDTOs = new ArrayList<>();

	    // Loop through each watchlist and convert to WatchlistDTO
	    for (Watchlist watchlist : watchlists) {
	        WatchlistDTO dto = new WatchlistDTO();
	        dto.setId(watchlist.getId());
	        dto.setWatchlistName(watchlist.getWName());
	        dto.setUserEmail(user.getEmail());

	        // Convert the list of Stock entities to StockDTO
	        List<StockDTO> stockDTOs = new ArrayList<>();
	        for (Stock stock : watchlist.getStocks()) {
	            StockDTO stockDTO = new StockDTO();
	            stockDTO.setId(stock.getStockId());
	            stockDTO.setCompanyName(stock.getCompanyName());
	            stockDTOs.add(stockDTO);
	        }

	        dto.setStocks(stockDTOs);
	        watchlistDTOs.add(dto);
	    }

	    return watchlistDTOs;
	}
	
	@Override
	public void deleteStockFromWatchlist(String email, String password, Long watchlistId, Long stockId) {
	    // Find the user by email and password, or throw an exception if not found
	    User user = userDao.findByEmailAndPassword(email, password);
	    if (user == null) {
	        throw new RuntimeException("User not found or invalid credentials");
	    }

	    // Fetch the watchlist by ID and associated with the user
	    Watchlist watchlist = watchlistDao.findById(watchlistId)
	            .orElseThrow(() -> new RuntimeException("Watchlist not found"));

	    // Check if the watchlist belongs to the user
	    if (!watchlist.getUser().getId().equals(user.getId())) {
	        throw new RuntimeException("Watchlist does not belong to the user");
	    }

	    // Fetch the stock by ID
	    Stock stock = stockDao.findById(stockId)
	            .orElseThrow(() -> new RuntimeException("Stock not found"));

	    // Remove the stock from the watchlist's stocks list
	    List<Stock> stocks = watchlist.getStocks();
	    if (!stocks.remove(stock)) {
	        throw new RuntimeException("Stock not found in watchlist");
	    }

	    // Save the updated watchlist
	    watchlistDao.save(watchlist);
	}



}
