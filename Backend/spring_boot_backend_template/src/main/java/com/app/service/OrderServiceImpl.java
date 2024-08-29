package com.app.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.OrderDao;
import com.app.dao.StockDao;
import com.app.dao.UserDao;
import com.app.dto.OrderDto;
import com.app.dto.UserDto;
import com.app.entities.Order;
import com.app.entities.Stock;
import com.app.entities.User;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

@Service
@Transactional
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderDao orderDao;

    @Autowired
    private PortfolioService portfolioService;

    @Autowired
    private TradeHistoryService tradeHistoryService;

    @Autowired
    private StockDao stockDao;

    @Autowired
    private UserDao userDao;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public String createOrder(OrderDto orderDto) {
    	System.out.println(orderDto);
    	
        // Map DTO to entity
        Order order = modelMapper.map(orderDto, Order.class);

        
        System.out.println(order);
        // Validate and set user
        User user = userDao.findByEmail(orderDto.getUserEmail())
                .orElseThrow(() -> new EntityNotFoundException("User not found with ID: " + order.getUser().getId()));
        order.setUser(user);

        // Validate and set stock
//        if (order.getStock() == null || order.getStock().getStockId() == null) {
//            throw new IllegalArgumentException("Stock ID must not be null");
//        }
        Stock stock = stockDao.findById(orderDto.getStockID())
                .orElseThrow(() -> new EntityNotFoundException("Stock not found with ID: " + order.getStock().getStockId()));
        order.setStock(stock);

        // Save the order
        Order savedOrder = orderDao.save(order);

        // Update portfolio based on order type
        if ("BUY".equalsIgnoreCase(order.getOrderType())) {
            portfolioService.addStockToPortfolio(order.getUser(), order.getStock(), order.getQuantity(), order.getPrice());
        } else if ("SELL".equalsIgnoreCase(order.getOrderType())) {
            portfolioService.removeStockFromPortfolio(order.getUser(), order.getStock(), order.getQuantity());
        } else {
            throw new IllegalArgumentException("Invalid order type: " + order.getOrderType());
        }

        // Create trade history
        tradeHistoryService.createTradeHistory(order);

        return "Order Saved Successfully";
    }

    @Override
    public List<Order> getAllOrders() {
        return orderDao.findAll();
    }

    @Override
    public Optional<Order> getOrderById(Long id) {
        return orderDao.findById(id);
    }

    @Override
    public Order saveOrder(Order order) {
        return orderDao.save(order);
    }

    @Override
    public void deleteOrder(Long id) {
        if (!orderDao.existsById(id)) {
            throw new EntityNotFoundException("Order not found with ID: " + id);
        }
        orderDao.deleteById(id);
    }
}