package com.app.service;

import com.app.dto.StockInfoListDTO;

public interface StockRESTClientService {
    StockInfoListDTO getData(String keyword);
}
