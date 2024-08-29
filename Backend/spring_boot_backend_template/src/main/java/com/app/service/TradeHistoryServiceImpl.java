package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.TradeHistoryDao;
import com.app.dto.TradeHistoryDto;
import com.app.entities.Order;
import com.app.entities.TradeHistory;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class TradeHistoryServiceImpl implements TradeHistoryService {

    @Autowired
    private TradeHistoryDao tradeHistoryDao;

    @Override
    public void createTradeHistory(Order order) {
        TradeHistory tradeHistory = new TradeHistory();
        tradeHistory.setUser(order.getUser());
        tradeHistory.setStock(order.getStock());
        tradeHistory.setTransactionType(order.getOrderType());
        tradeHistory.setQuantity(order.getQuantity());
        tradeHistory.setPriceAtTransaction(order.getPrice());
        tradeHistory.setTradeDate(order.getCreationTime());

        tradeHistoryDao.save(tradeHistory);
    }

    @Override
    public List<TradeHistoryDto> getTradeHistoryByUserId(Long userId) {
        List<TradeHistory> tradeHistories = tradeHistoryDao.findByUserId(userId);

        List<TradeHistoryDto> tradeHistoryDtos = new ArrayList<>();
        for (TradeHistory tradeHistory : tradeHistories) {
            TradeHistoryDto dto = new TradeHistoryDto();
            dto.setStockName(tradeHistory.getStock().getCompanyName());
            dto.setTransactionType(tradeHistory.getTransactionType());
            dto.setQuantity(tradeHistory.getQuantity());
            dto.setPriceAtTransaction(tradeHistory.getPriceAtTransaction());
            tradeHistoryDtos.add(dto);
        }
        
        return tradeHistoryDtos;
    }
    
    
    
    @Override
    public List<TradeHistory> getAllTradeHistories() {
        return tradeHistoryDao.findAll();
    }

    @Override
    public Optional<TradeHistory> getTradeHistoryById(Long id) {
        return tradeHistoryDao.findById(id);
    }

    @Override
    public TradeHistory saveTradeHistory(TradeHistory tradeHistory) {
        return tradeHistoryDao.save(tradeHistory);
    }

    @Override
    public void deleteTradeHistory(Long id) {
        tradeHistoryDao.deleteById(id);
    }
}
