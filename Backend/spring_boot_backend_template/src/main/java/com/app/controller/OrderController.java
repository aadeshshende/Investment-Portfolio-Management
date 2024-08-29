package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.app.dto.OrderDto;
import com.app.entities.Order;
import com.app.service.OrderService;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "http://localhost:3000")
public class OrderController {

    @Autowired
    private OrderService orderservice;

    @PostMapping
    public String createOrder(@RequestBody OrderDto orderdto) {
    	System.out.println(orderdto);
        return orderservice.createOrder(orderdto);
    }
    
    
    @GetMapping
    public List<Order> getAllOrders() {
        return orderservice.getAllOrders();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Order> getOrderById(@PathVariable Long id) {
        return orderservice.getOrderById(id)
                .map(order -> ResponseEntity.ok().body(order))
                .orElse(ResponseEntity.notFound().build());
    }

	/*
	 * @PostMapping public Order createOrder(@RequestBody Order order) { return
	 * orderservice.saveOrder(order); }
	 */

    @PutMapping("/{id}")
    public ResponseEntity<Order> updateOrder(@PathVariable Long id, @RequestBody Order orderDetails) {
        return orderservice.getOrderById(id)
                .map(order -> {
                    order.setOrderType(orderDetails.getOrderType());
                    order.setOrderStatus(orderDetails.getOrderStatus());
                    order.setQuantity(orderDetails.getQuantity());
                    order.setPrice(orderDetails.getPrice());
                    order.setCreationTime(orderDetails.getCreationTime());
                    Order updatedOrder = orderservice.saveOrder(order);
                    return ResponseEntity.ok().body(updatedOrder);
                }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteOrder(@PathVariable Long id) {
        return orderservice.getOrderById(id)
                .map(order -> {
                	orderservice.deleteOrder(id);
                    return ResponseEntity.ok().build();
                }).orElse(ResponseEntity.notFound().build());
    }
}

