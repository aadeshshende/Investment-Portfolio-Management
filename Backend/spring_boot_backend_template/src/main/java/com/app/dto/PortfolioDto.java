package com.app.dto;

import com.app.entities.Stock;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class PortfolioDto {
    private Long id;
    private String stockName;
    private int quantity;
    private double averagePurchasePrice;
}
