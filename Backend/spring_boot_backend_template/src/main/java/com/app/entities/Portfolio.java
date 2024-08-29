package com.app.entities;

import java.util.List;

import javax.persistence.*;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "portfolio")
@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper = true)
public class Portfolio extends BaseEntity{

	 @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

	 @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "stock_id", nullable = false)
    private Stock stock;

    private int quantity;
    private double averagePurchasePrice;

    // Getters and Setters
}

