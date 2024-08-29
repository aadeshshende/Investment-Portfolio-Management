package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.dto.OrderDto;
import com.app.entities.Order;

public interface OrderService {

	List<Order> getAllOrders();

	Optional<Order> getOrderById(Long id);

	Order saveOrder(Order order);

	void deleteOrder(Long id);

	//Order createOrder(Order order);

	String createOrder(OrderDto order);

}
