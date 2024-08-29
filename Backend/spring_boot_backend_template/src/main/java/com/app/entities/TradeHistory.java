package com.app.entities;

import javax.persistence.*;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "trade_history")
@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper = true)
public class TradeHistory extends BaseEntity{

	 @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

	 @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "stock_id", nullable = false)
    private Stock stock;

    private String transactionType;
    private int quantity;
    private double priceAtTransaction;
    private LocalDateTime tradeDate;
    // Getters and Setters
}

