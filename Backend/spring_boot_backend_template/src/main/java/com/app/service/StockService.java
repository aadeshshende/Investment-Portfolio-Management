package com.app.service;

import java.util.List;

import com.app.dto.AddStockResponseDTO;
import com.app.dto.ApiResponse;
import com.app.dto.NSEStockInfoDTO;
import com.app.dto.StockResDto;
import com.app.entities.Stock;

public interface StockService {
	
	Long addStock(Stock stock);
	List<StockResDto> getStocks();
	String deleteStockById(Long id);
	String updateStockDetails(Long categoryId,Stock stock);

	List<NSEStockInfoDTO> searchStocks(String keyword);
	
	Long getStockIdByInstrumentKey(String instrumentKey);

}
