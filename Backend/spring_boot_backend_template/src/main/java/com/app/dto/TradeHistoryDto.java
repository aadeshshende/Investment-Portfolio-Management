package com.app.dto;

import java.time.LocalDateTime;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class TradeHistoryDto {
    private String stockName;
    private String transactionType;
    private int quantity;
    private double priceAtTransaction;
}
