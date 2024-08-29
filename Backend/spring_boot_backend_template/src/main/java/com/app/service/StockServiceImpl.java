package com.app.service;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.NSEStockDao;
import com.app.dao.StockDao;
import com.app.dto.ApiResponse;
import com.app.dto.NSEStockInfoDTO;
import com.app.dto.StockResDto;
import com.app.entities.NSEStockInfo;
import com.app.entities.Stock;
import com.app.utils.MappingUtil;

@Service
@Transactional
public class StockServiceImpl implements StockService{

	
	@Autowired
	private StockDao stockDao;
	
	@Autowired
	private NSEStockDao nseStockDao;
	
	@Autowired
	private ModelMapper mapper;
	
	@Override
	public Long addStock(Stock stock) {
//		stockDao.save(stock);
//		Long id = stock.getStockId();
		return stockDao.save(stock).getStockId();
	}

	 @Override
	    public Long getStockIdByInstrumentKey(String instrumentKey) {
	        return stockDao.findByInstrumentKey(instrumentKey)
	                .map(Stock::getStockId)
	                .orElseThrow(() -> new RuntimeException("Stock not found with instrumentKey: " + instrumentKey));
	    }
	
	

	@Override
	public List<StockResDto> getStocks() {
		List<Stock> stocks = stockDao.findAll();
		List<StockResDto>  stockList = new ArrayList<>();
		for (Stock stock : stocks) {
    	 	stockList.add(mapper.map(stock, StockResDto.class));
		}
			return stockList;
	}

	@Override
	public String deleteStockById(Long id) {
		if (stockDao.existsById(id)) {
			stockDao.deleteById(id);
			return "deleted Stock !!!";
		}
		throw new ResourceNotFoundException("Invalid Stock id !!!");

	}

	@Override
	public String updateStockDetails(Long stockId, Stock stock) {
		if (stockDao.existsById(stockId)) {

			Stock persistentStock = stockDao.save(stock);
			return "Stock updated.....";
		}
		throw new ResourceNotFoundException("Invalid Stock ID !!!!!!!!");

	}

	@Override
	public List<NSEStockInfoDTO> searchStocks(String keyword) {
		List<NSEStockInfo> res= nseStockDao.findByNameLike("%"+keyword+"%");
		System.out.println(res);
		return MappingUtil.mapList(res, NSEStockInfoDTO.class);
	
	}

}
