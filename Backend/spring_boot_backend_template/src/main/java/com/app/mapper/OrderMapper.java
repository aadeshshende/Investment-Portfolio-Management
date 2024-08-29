package com.app.mapper;

import org.springframework.stereotype.Component;

import com.app.dto.OrderDto;
import com.app.dto.UserDto;
import com.app.entities.Order;

@Component
public class OrderMapper {
	/*
	 * public OrderDto toDto(Order order) { OrderDto dto = new OrderDto();
	 * dto.setId(order.getId()); dto.setOrderType(order.getOrderType());
	 * dto.setOrderStatus(order.getOrderStatus());
	 * dto.setQuantity(order.getQuantity()); dto.setPrice(order.getPrice());
	 * dto.setUserID(new UserDto(order.getUser())); // Assuming UserDto constructor
	 * that accepts User dto.setStock(new StockDto(order.getStock())); // Assuming
	 * StockDto constructor that accepts Stock return dto; }
	 */

    public Order toEntity(OrderDto dto) {
        Order order = new Order();
        //order.setId(dto.getId());
        order.setOrderType(dto.getOrderType());
        order.setOrderStatus(dto.getOrderStatus());
        order.setQuantity(dto.getQuantity());
        order.setPrice(dto.getPrice());
        // Setting user and stock is handled in the service
        return order;
    }
}
