package com.app.entities;

import javax.persistence.*;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "transaction")
@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper = true)
public class Transaction extends BaseEntity{

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "stock_id", nullable = false)
    private Stock stock;

    private String transactionType;
    private int quantity;
    private double priceAtTransaction;
    private LocalDate transactionDate;

    // Getters and Setters
}

