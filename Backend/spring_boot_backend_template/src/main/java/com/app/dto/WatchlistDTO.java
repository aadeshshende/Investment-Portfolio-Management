package com.app.dto;

import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class WatchlistDTO extends BaseDTO{

    private String watchlistName;
    private String userEmail;
    private List<StockDTO> stocks;
}
